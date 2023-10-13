import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { BondCreated } from "../generated/schema"
import { BondCreated as BondCreatedEvent } from "../generated/Nebula/Nebula"
import { handleBondCreated } from "../src/nebula"
import { createBondCreatedEvent } from "./nebula-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let atom = Bytes.fromI32(1234567890)
    let element = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let atomUid = Bytes.fromI32(1234567890)
    let newBondCreatedEvent = createBondCreatedEvent(atom, element, atomUid)
    handleBondCreated(newBondCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BondCreated created and stored", () => {
    assert.entityCount("BondCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BondCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "atom",
      "1234567890"
    )
    assert.fieldEquals(
      "BondCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "element",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BondCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "atomUid",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
