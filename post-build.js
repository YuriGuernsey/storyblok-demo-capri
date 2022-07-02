import chalk from "chalk";

if (process.env.URL) {
  console.log(chalk.yellowBright("─".repeat(65)));
  console.log(chalk.yellowBright("Storyblok Setup Instructions"));
  console.log(chalk.yellowBright("─".repeat(65)));
  console.log("");
  console.log(chalk.gray("1."), "Open", chalk.underline("app.storyblok.com"));
  console.log(
    chalk.gray("2."),
    "Go to",
    chalk.cyan("Settings > Visual Editor")
  );
  console.log(chalk.gray("3."), "Add the following preview URL:");
  console.log("");
  console.log(chalk.cyan(`${process.env.URL}/preview?path=`));
  console.log("");
  console.log(chalk.yellowBright("─".repeat(65)));
  console.log("");
}
