import chalk from "chalk";
import request from "request-promise";
import * as cheerio from "cheerio";

const recent = async (req, res) => {
  try {
    const link = `https://store.steampowered.com/search/?sort_by=Released_DESC&ignore_preferences=1`;
    const recent = [];
    const response = await request({
      uri: link,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,pl;q=0.8",
      },
      gzip: true,
    });
    const $ = await cheerio.load(response);

    const games = $(".search_result_row");
    games.each((index, game) => {
      const image = $(game)
        .find("div[class='col search_capsule'] > img")
        .attr("src");
      const title = $(game).find('span[class="title"]').text().trim();
      const released = $(game)
        .find('div[class="col search_released responsive_secondrow"]')
        .text()
        .trim();
      const price =
        $(game).find('div[class="discount_prices"] > div').text().trim()
          .length > 6
          ? `$${
              $(game)
                .find('div[class="discount_prices"] > div')
                .text()
                .trim()
                .split("$")[2]
            }`
          : $(game).find('div[class="discount_prices"] > div').text().trim();

      const link = $(game).attr("href");

      recent.push({ id: index + 1, title, image, released, price, link });
    });
    res.status(200).json({ recent });
  } catch (error) {
    console.log(chalk.magenta(`[recent] ${error.message}`));
  }
};

const upcoming = async (req, res) => {
  try {
    const upcoming = [];
    const link = `https://store.steampowered.com/search/?filter=popularcomingsoon`;
    const response = await request({
      uri: link,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,pl;q=0.8",
      },
      gzip: true,
    });
    const $ = await cheerio.load(response);

    const games = $(".search_result_row");
    games.each((index, game) => {
      const image = $(game)
        .find("div[class='col search_capsule'] > img")
        .attr("src");
      const title = $(game).find('span[class="title"]').text().trim();
      const release_date = $(game)
        .find('div[class="col search_released responsive_secondrow"]')
        .text()
        .trim();

      upcoming.push({ id: index + 1, title, image, release_date });
    });
    res.status(200).json({ upcoming });
  } catch (error) {
    console.log(`[upcoming] ${error.message}`);
  }
};

export { recent, upcoming };
