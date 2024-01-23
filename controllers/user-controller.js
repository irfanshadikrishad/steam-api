import chalk from "chalk";
import request from "request-promise";
import * as cheerio from "cheerio";

const user = async (req, res) => {
  try {
    const { id } = await req.body;
    const profileLink = `https://steamcommunity.com/id/${id}`;

    const response = await request({
      uri: profileLink,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,pl;q=0.8",
      },
      gzip: true,
    });
    const $ = cheerio.load(response);

    const username = $(".actual_persona_name").text().trim();
    const avatar = $(".playerAvatarAutoSizeInner > img").attr("src");
    const actualName = $('div[class="header_real_name ellipsis"] > bdi').text();
    const level = $(
      ".profile_header_badgeinfo .persona_level .friendPlayerLevel .friendPlayerLevelNum"
    )
      .text()
      .trim();

    const stats = [];
    const linkArea = $(".profile_count_link");
    await linkArea.each((index, statsRaw) => {
      const stats_title = $(statsRaw).find(".count_link_label").text().trim();
      const stats_count = $(statsRaw)
        .find(".profile_count_link_total")
        .text()
        .trim();

      stats.push({ title: stats_title, count: stats_count });
    });
    const status = $(".profile_in_game_header").text().trim();
    const avatarFrame = $(
      ".playerAvatarAutoSizeInner > .profile_avatar_frame > img"
    ).attr("src");
    const gameName = $(".profile_in_game_name").text();

    res.status(200).json({
      username,
      actualName,
      level,
      avatar,
      avatarFrame,
      status,
      stats,
      gameName,
    });
  } catch (error) {
    console.log(chalk.magenta(`[user] ${error.message}`));
  }
};

export { user };
