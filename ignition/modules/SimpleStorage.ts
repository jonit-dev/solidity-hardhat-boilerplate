import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

module.exports = buildModule("SimpleStorage", (m) => {
  const contract = m.contract("SimpleStorage", ["123"]);
  m.call(contract, "set", ["2"]);

  m.call(contract, "get", []);

  return { contract };
});
