import {
  BondCreated as BondCreatedEvent,
  UnBond as UnBondEvent
} from "../generated/Nebula/Nebula"
import { BondCreated, UnBond } from "../generated/schema"

export function handleBondCreated(event: BondCreatedEvent): void {
  let entity = new BondCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.atom = event.params.atom
  entity.element = event.params.element
  entity.atomUid = event.params.atomUid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnBond(event: UnBondEvent): void {
  let entity = new UnBond(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.atom = event.params.atom
  entity.element = event.params.element
  entity.atomUid = event.params.atomUid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
