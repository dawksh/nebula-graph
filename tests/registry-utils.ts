import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import { AtomRegistered } from "../generated/Registry/Registry"

export function createAtomRegisteredEvent(
  uid: Bytes,
  atom: Address
): AtomRegistered {
  let atomRegisteredEvent = changetype<AtomRegistered>(newMockEvent())

  atomRegisteredEvent.parameters = new Array()

  atomRegisteredEvent.parameters.push(
    new ethereum.EventParam("uid", ethereum.Value.fromFixedBytes(uid))
  )
  atomRegisteredEvent.parameters.push(
    new ethereum.EventParam("atom", ethereum.Value.fromAddress(atom))
  )

  return atomRegisteredEvent
}
