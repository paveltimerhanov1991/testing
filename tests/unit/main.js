import assert from "assert";

describe("testing_app", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    console.log('Package.json seems to be ok')
    assert.strictEqual(name, "testing_app");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      console.log('Client is not a server')
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      console.log('Server is not a client')
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
