import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { AtomRegistered } from "../generated/schema"
import { AtomRegistered as AtomRegisteredEvent } from "../generated/Registry/Registry"
import { handleAtomRegistered } from "../src/registry"
import { createAtomRegisteredEvent } from "./registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let uid = Bytes.fromI32(1234567890)
    let atom = Address.fromString("0x0000000000000000000000000000000000000001")
    let newAtomRegisteredEvent = createAtomRegisteredEvent(uid, atom)
    handleAtomRegistered(newAtomRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AtomRegistered created and stored", () => {
    assert.entityCount("AtomRegistered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AtomRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "uid",
      "1234567890"
    )
    assert.fieldEquals(
      "AtomRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "atom",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
