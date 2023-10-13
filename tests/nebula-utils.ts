import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import { BondCreated, UnBond } from "../generated/Nebula/Nebula"

export function createBondCreatedEvent(
  atom: Bytes,
  element: Address,
  atomUid: Bytes
): BondCreated {
  let bondCreatedEvent = changetype<BondCreated>(newMockEvent())

  bondCreatedEvent.parameters = new Array()

  bondCreatedEvent.parameters.push(
    new ethereum.EventParam("atom", ethereum.Value.fromFixedBytes(atom))
  )
  bondCreatedEvent.parameters.push(
    new ethereum.EventParam("element", ethereum.Value.fromAddress(element))
  )
  bondCreatedEvent.parameters.push(
    new ethereum.EventParam("atomUid", ethereum.Value.fromFixedBytes(atomUid))
  )

  return bondCreatedEvent
}

export function createUnBondEvent(
  atom: Bytes,
  element: Address,
  atomUid: Bytes
): UnBond {
  let unBondEvent = changetype<UnBond>(newMockEvent())

  unBondEvent.parameters = new Array()

  unBondEvent.parameters.push(
    new ethereum.EventParam("atom", ethereum.Value.fromFixedBytes(atom))
  )
  unBondEvent.parameters.push(
    new ethereum.EventParam("element", ethereum.Value.fromAddress(element))
  )
  unBondEvent.parameters.push(
    new ethereum.EventParam("atomUid", ethereum.Value.fromFixedBytes(atomUid))
  )

  return unBondEvent
}
