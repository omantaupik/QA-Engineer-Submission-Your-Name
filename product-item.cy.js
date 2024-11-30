/// <reference types="cypress" />

describe("STest View Item Product Decription", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
  });

  it("can view item description with image item, id=4", () => {
    cy.get("#item_4_img_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=4");
    cy.get(".inventory_item_img").should("be.visible");
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Backpack");
    cy.get(".inventory_item_desc").should(
      "have.text",
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unparalled laptop and tablet protection."
    );
    cy.get(".inventory_item_price").should("have.text", "$29.99");
  });

  it("can view item description with image item, id=0", () => {
    cy.get("#item_0_img_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=0");
    cy.get(".inventory_item_img").should("be.visible");
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs bike light");
    cy.get(".inventory_item_desc").should(
      "have.text",
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
    );
    cy.get(".inventory_item_price").should("have.text", "$9.99");
  });

  it("can view item description with image item, id=1", () => {
    cy.get("#item_1_img_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=1");
    cy.get(".inventory_item_img").should("be.visible");
    cy.get(".inventory_item_name").should(
      "have.text",
      "Sauce Labs Bolt T-Shirt"
    );
    cy.get(".inventory_item_desc").should(
      "have.text",
      "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
    );
    cy.get(".inventory_item_price").should("have.text", "$15.99");
  });

  it("can view item description with image item, id=5", () => {
    cy.get("#item_5_img_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=5");
    cy.get(".inventory_item_img").should("be.visible");
    cy.get(".inventory_item_name").should(
      "have.text",
      "Sauce Labs Fleece Jacket"
    );
    cy.get(".inventory_item_desc").should(
      "have.text",
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
    );
    cy.get(".inventory_item_price").should("have.text", "$49.99");
  });

  it("can view item description with image item, id=2", () => {
    cy.get("#item_2_img_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=2");
    cy.get(".inventory_item_img").should("be.visible");
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Onesie");
    cy.get(".inventory_item_desc").should(
      "have.text",
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
    );
    cy.get(".inventory_item_price").should("have.text", "$7.99");
  });

  it("can view item description with image item, id=3", () => {
    cy.get("#item_3_img_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=3");
    cy.get(".inventory_item_img").should("be.visible");
    cy.get(".inventory_item_name").should(
      "have.text",
      "Test.allTheThings() T-Shirt (Red)"
    );
    cy.get(".inventory_item_desc").should(
      "have.text",
      "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
    );
    cy.get(".inventory_item_price").should("have.text", "$15.99");
  });
});
