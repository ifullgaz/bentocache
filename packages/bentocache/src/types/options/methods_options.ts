import type { Factory, GetSetFactory, RawCommonOptions } from '../main.js'

/**
 * Options accepted by the `getOrSet` method
 */
export type SetCommonOptions = Pick<
  RawCommonOptions,
  | 'grace'
  | 'graceBackoff'
  | 'suppressL2Errors'
  | 'lockTimeout'
  | 'ttl'
  | 'timeout'
  | 'hardTimeout'
  | 'skipBusNotify'
  | 'skipL2Write'
  | 'onFactoryError'
  | 'tags'
>

/**
 * Options accepted by the `getOrSet` method
 */
export type GetOrSetOptions<T> = {
  key: string
  factory: GetSetFactory<T>
} & SetCommonOptions &
  Pick<RawCommonOptions, 'forceFresh'>

/**
 * Options accepted by the `getOrSetForever` method
 */
export type GetOrSetForeverOptions<T> = {
  key: string
  factory: GetSetFactory<T>
} & Omit<SetCommonOptions, 'ttl'>

/**
 * Options accepted by the `set` method
 */
export type SetOptions = { key: string; value: any } & SetCommonOptions

/**
 * Options accepted by the `get` method
 */
export type GetOptions<T> = { key: string; defaultValue?: Factory<T> } & Pick<
  RawCommonOptions,
  'grace' | 'graceBackoff' | 'suppressL2Errors'
>

/**
 * Options accepted by the `delete` method
 */
export type DeleteOptions = { key: string } & Pick<RawCommonOptions, 'suppressL2Errors'>
export type DeleteManyOptions = { keys: string[] } & Pick<RawCommonOptions, 'suppressL2Errors'>

/**
 * Options accepted by the `deleteByTag` method
 */
export type DeleteByTagOptions = { tags: string[] } & Pick<RawCommonOptions, 'suppressL2Errors'>

/**
 * Options accepted by the `expire` method
 */
export type ExpireOptions = { key: string } & Pick<RawCommonOptions, 'suppressL2Errors'>

/**
 * Options accepted by the `has` method
 */
export type HasOptions = { key: string } & Pick<RawCommonOptions, 'suppressL2Errors'>

/**
 * Options accepted by the `clear` method
 */
export type ClearOptions = Pick<RawCommonOptions, 'suppressL2Errors'>
