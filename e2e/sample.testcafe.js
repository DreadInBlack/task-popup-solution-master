import { Selector as $ } from "testcafe";

fixture`Main page`.page`../dist/index.html`;

test("Закрывает попап по ESC", async t => {
  await t
    .click("details.dialog summary")
    .expect($("details[open]").count)
    .eql(1);

  await t
    .pressKey("esc")
    .expect($("details[open]").count)
    .eql(0);
});
