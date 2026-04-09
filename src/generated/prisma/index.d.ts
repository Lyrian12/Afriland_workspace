
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Recording
 * 
 */
export type Recording = $Result.DefaultSelection<Prisma.$RecordingPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model MeetingAttendee
 * 
 */
export type MeetingAttendee = $Result.DefaultSelection<Prisma.$MeetingAttendeePayload>
/**
 * Model Space
 * 
 */
export type Space = $Result.DefaultSelection<Prisma.$SpacePayload>
/**
 * Model SpaceMember
 * 
 */
export type SpaceMember = $Result.DefaultSelection<Prisma.$SpaceMemberPayload>
/**
 * Model Warning
 * 
 */
export type Warning = $Result.DefaultSelection<Prisma.$WarningPayload>
/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model OtpInvite
 * 
 */
export type OtpInvite = $Result.DefaultSelection<Prisma.$OtpInvitePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SpaceRole: {
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  MEMBER: 'MEMBER'
};

export type SpaceRole = (typeof SpaceRole)[keyof typeof SpaceRole]


export const MemberStatus: {
  ACTIVE: 'ACTIVE',
  WARNED: 'WARNED',
  BLOCKED: 'BLOCKED'
};

export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus]


export const RecordingStatus: {
  PENDING: 'PENDING',
  TRANSCRIBED: 'TRANSCRIBED',
  SUMMARIZED: 'SUMMARIZED',
  EXPORTED: 'EXPORTED'
};

export type RecordingStatus = (typeof RecordingStatus)[keyof typeof RecordingStatus]


export const MessageType: {
  TEXT: 'TEXT',
  FILE: 'FILE',
  AUDIO: 'AUDIO',
  IMAGE: 'IMAGE',
  SYSTEM: 'SYSTEM'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const NotificationType: {
  MENTION: 'MENTION',
  WARNING: 'WARNING',
  PIN: 'PIN',
  NEW_MESSAGE: 'NEW_MESSAGE',
  SYSTEM: 'SYSTEM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type SpaceRole = $Enums.SpaceRole

export const SpaceRole: typeof $Enums.SpaceRole

export type MemberStatus = $Enums.MemberStatus

export const MemberStatus: typeof $Enums.MemberStatus

export type RecordingStatus = $Enums.RecordingStatus

export const RecordingStatus: typeof $Enums.RecordingStatus

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recording`: Exposes CRUD operations for the **Recording** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recordings
    * const recordings = await prisma.recording.findMany()
    * ```
    */
  get recording(): Prisma.RecordingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingAttendee`: Exposes CRUD operations for the **MeetingAttendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingAttendees
    * const meetingAttendees = await prisma.meetingAttendee.findMany()
    * ```
    */
  get meetingAttendee(): Prisma.MeetingAttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.space`: Exposes CRUD operations for the **Space** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spaces
    * const spaces = await prisma.space.findMany()
    * ```
    */
  get space(): Prisma.SpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spaceMember`: Exposes CRUD operations for the **SpaceMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpaceMembers
    * const spaceMembers = await prisma.spaceMember.findMany()
    * ```
    */
  get spaceMember(): Prisma.SpaceMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warning`: Exposes CRUD operations for the **Warning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warnings
    * const warnings = await prisma.warning.findMany()
    * ```
    */
  get warning(): Prisma.WarningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpInvite`: Exposes CRUD operations for the **OtpInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpInvites
    * const otpInvites = await prisma.otpInvite.findMany()
    * ```
    */
  get otpInvite(): Prisma.OtpInviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Recording: 'Recording',
    Room: 'Room',
    Meeting: 'Meeting',
    MeetingAttendee: 'MeetingAttendee',
    Space: 'Space',
    SpaceMember: 'SpaceMember',
    Warning: 'Warning',
    Channel: 'Channel',
    Message: 'Message',
    OtpInvite: 'OtpInvite',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "recording" | "room" | "meeting" | "meetingAttendee" | "space" | "spaceMember" | "warning" | "channel" | "message" | "otpInvite" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Recording: {
        payload: Prisma.$RecordingPayload<ExtArgs>
        fields: Prisma.RecordingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>
          }
          findFirst: {
            args: Prisma.RecordingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>
          }
          findMany: {
            args: Prisma.RecordingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>[]
          }
          create: {
            args: Prisma.RecordingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>
          }
          createMany: {
            args: Prisma.RecordingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>[]
          }
          delete: {
            args: Prisma.RecordingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>
          }
          update: {
            args: Prisma.RecordingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>
          }
          deleteMany: {
            args: Prisma.RecordingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>[]
          }
          upsert: {
            args: Prisma.RecordingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordingPayload>
          }
          aggregate: {
            args: Prisma.RecordingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecording>
          }
          groupBy: {
            args: Prisma.RecordingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordingCountArgs<ExtArgs>
            result: $Utils.Optional<RecordingCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      MeetingAttendee: {
        payload: Prisma.$MeetingAttendeePayload<ExtArgs>
        fields: Prisma.MeetingAttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingAttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingAttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>
          }
          findFirst: {
            args: Prisma.MeetingAttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingAttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>
          }
          findMany: {
            args: Prisma.MeetingAttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>[]
          }
          create: {
            args: Prisma.MeetingAttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>
          }
          createMany: {
            args: Prisma.MeetingAttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingAttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>[]
          }
          delete: {
            args: Prisma.MeetingAttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>
          }
          update: {
            args: Prisma.MeetingAttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>
          }
          deleteMany: {
            args: Prisma.MeetingAttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingAttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingAttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>[]
          }
          upsert: {
            args: Prisma.MeetingAttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingAttendeePayload>
          }
          aggregate: {
            args: Prisma.MeetingAttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingAttendee>
          }
          groupBy: {
            args: Prisma.MeetingAttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingAttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingAttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingAttendeeCountAggregateOutputType> | number
          }
        }
      }
      Space: {
        payload: Prisma.$SpacePayload<ExtArgs>
        fields: Prisma.SpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findFirst: {
            args: Prisma.SpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findMany: {
            args: Prisma.SpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          create: {
            args: Prisma.SpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          createMany: {
            args: Prisma.SpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          delete: {
            args: Prisma.SpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          update: {
            args: Prisma.SpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          deleteMany: {
            args: Prisma.SpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          upsert: {
            args: Prisma.SpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          aggregate: {
            args: Prisma.SpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpace>
          }
          groupBy: {
            args: Prisma.SpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpaceCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceCountAggregateOutputType> | number
          }
        }
      }
      SpaceMember: {
        payload: Prisma.$SpaceMemberPayload<ExtArgs>
        fields: Prisma.SpaceMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>
          }
          findFirst: {
            args: Prisma.SpaceMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>
          }
          findMany: {
            args: Prisma.SpaceMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>[]
          }
          create: {
            args: Prisma.SpaceMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>
          }
          createMany: {
            args: Prisma.SpaceMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpaceMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>[]
          }
          delete: {
            args: Prisma.SpaceMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>
          }
          update: {
            args: Prisma.SpaceMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>
          }
          deleteMany: {
            args: Prisma.SpaceMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpaceMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>[]
          }
          upsert: {
            args: Prisma.SpaceMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpaceMemberPayload>
          }
          aggregate: {
            args: Prisma.SpaceMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpaceMember>
          }
          groupBy: {
            args: Prisma.SpaceMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpaceMemberCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceMemberCountAggregateOutputType> | number
          }
        }
      }
      Warning: {
        payload: Prisma.$WarningPayload<ExtArgs>
        fields: Prisma.WarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          findFirst: {
            args: Prisma.WarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          findMany: {
            args: Prisma.WarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          create: {
            args: Prisma.WarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          createMany: {
            args: Prisma.WarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          delete: {
            args: Prisma.WarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          update: {
            args: Prisma.WarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          deleteMany: {
            args: Prisma.WarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          upsert: {
            args: Prisma.WarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          aggregate: {
            args: Prisma.WarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarning>
          }
          groupBy: {
            args: Prisma.WarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarningCountArgs<ExtArgs>
            result: $Utils.Optional<WarningCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      OtpInvite: {
        payload: Prisma.$OtpInvitePayload<ExtArgs>
        fields: Prisma.OtpInviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpInviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpInviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>
          }
          findFirst: {
            args: Prisma.OtpInviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpInviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>
          }
          findMany: {
            args: Prisma.OtpInviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>[]
          }
          create: {
            args: Prisma.OtpInviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>
          }
          createMany: {
            args: Prisma.OtpInviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpInviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>[]
          }
          delete: {
            args: Prisma.OtpInviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>
          }
          update: {
            args: Prisma.OtpInviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>
          }
          deleteMany: {
            args: Prisma.OtpInviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpInviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpInviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>[]
          }
          upsert: {
            args: Prisma.OtpInviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpInvitePayload>
          }
          aggregate: {
            args: Prisma.OtpInviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpInvite>
          }
          groupBy: {
            args: Prisma.OtpInviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpInviteCountArgs<ExtArgs>
            result: $Utils.Optional<OtpInviteCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    recording?: RecordingOmit
    room?: RoomOmit
    meeting?: MeetingOmit
    meetingAttendee?: MeetingAttendeeOmit
    space?: SpaceOmit
    spaceMember?: SpaceMemberOmit
    warning?: WarningOmit
    channel?: ChannelOmit
    message?: MessageOmit
    otpInvite?: OtpInviteOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recordings: number
    createdMeetings: number
    meetingAttendees: number
    ownedSpaces: number
    spaceMemberships: number
    createdChannels: number
    messages: number
    sentOtpInvites: number
    issuedWarnings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recordings?: boolean | UserCountOutputTypeCountRecordingsArgs
    createdMeetings?: boolean | UserCountOutputTypeCountCreatedMeetingsArgs
    meetingAttendees?: boolean | UserCountOutputTypeCountMeetingAttendeesArgs
    ownedSpaces?: boolean | UserCountOutputTypeCountOwnedSpacesArgs
    spaceMemberships?: boolean | UserCountOutputTypeCountSpaceMembershipsArgs
    createdChannels?: boolean | UserCountOutputTypeCountCreatedChannelsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    sentOtpInvites?: boolean | UserCountOutputTypeCountSentOtpInvitesArgs
    issuedWarnings?: boolean | UserCountOutputTypeCountIssuedWarningsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingAttendeeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpaceMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentOtpInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpInviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIssuedWarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    meetings: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | RoomCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    attendees: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | MeetingCountOutputTypeCountAttendeesArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingAttendeeWhereInput
  }


  /**
   * Count Type SpaceCountOutputType
   */

  export type SpaceCountOutputType = {
    members: number
    channels: number
    otpInvites: number
  }

  export type SpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | SpaceCountOutputTypeCountMembersArgs
    channels?: boolean | SpaceCountOutputTypeCountChannelsArgs
    otpInvites?: boolean | SpaceCountOutputTypeCountOtpInvitesArgs
  }

  // Custom InputTypes
  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceCountOutputType
     */
    select?: SpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceMemberWhereInput
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountOtpInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpInviteWhereInput
  }


  /**
   * Count Type SpaceMemberCountOutputType
   */

  export type SpaceMemberCountOutputType = {
    warnings: number
    notifications: number
  }

  export type SpaceMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warnings?: boolean | SpaceMemberCountOutputTypeCountWarningsArgs
    notifications?: boolean | SpaceMemberCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * SpaceMemberCountOutputType without action
   */
  export type SpaceMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMemberCountOutputType
     */
    select?: SpaceMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpaceMemberCountOutputType without action
   */
  export type SpaceMemberCountOutputTypeCountWarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
  }

  /**
   * SpaceMemberCountOutputType without action
   */
  export type SpaceMemberCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    messages: number
    notifications: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChannelCountOutputTypeCountMessagesArgs
    notifications?: boolean | ChannelCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    replies: number
    notifications: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | MessageCountOutputTypeCountRepliesArgs
    notifications?: boolean | MessageCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    bio: string | null
    phone: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    bio: string | null
    phone: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    bio: number
    phone: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    bio?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    bio?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    bio?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatar: string | null
    bio: string | null
    phone: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recordings?: boolean | User$recordingsArgs<ExtArgs>
    createdMeetings?: boolean | User$createdMeetingsArgs<ExtArgs>
    meetingAttendees?: boolean | User$meetingAttendeesArgs<ExtArgs>
    ownedSpaces?: boolean | User$ownedSpacesArgs<ExtArgs>
    spaceMemberships?: boolean | User$spaceMembershipsArgs<ExtArgs>
    createdChannels?: boolean | User$createdChannelsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    sentOtpInvites?: boolean | User$sentOtpInvitesArgs<ExtArgs>
    issuedWarnings?: boolean | User$issuedWarningsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatar" | "bio" | "phone" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recordings?: boolean | User$recordingsArgs<ExtArgs>
    createdMeetings?: boolean | User$createdMeetingsArgs<ExtArgs>
    meetingAttendees?: boolean | User$meetingAttendeesArgs<ExtArgs>
    ownedSpaces?: boolean | User$ownedSpacesArgs<ExtArgs>
    spaceMemberships?: boolean | User$spaceMembershipsArgs<ExtArgs>
    createdChannels?: boolean | User$createdChannelsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    sentOtpInvites?: boolean | User$sentOtpInvitesArgs<ExtArgs>
    issuedWarnings?: boolean | User$issuedWarningsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recordings: Prisma.$RecordingPayload<ExtArgs>[]
      createdMeetings: Prisma.$MeetingPayload<ExtArgs>[]
      meetingAttendees: Prisma.$MeetingAttendeePayload<ExtArgs>[]
      ownedSpaces: Prisma.$SpacePayload<ExtArgs>[]
      spaceMemberships: Prisma.$SpaceMemberPayload<ExtArgs>[]
      createdChannels: Prisma.$ChannelPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      sentOtpInvites: Prisma.$OtpInvitePayload<ExtArgs>[]
      issuedWarnings: Prisma.$WarningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatar: string | null
      bio: string | null
      phone: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recordings<T extends User$recordingsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdMeetings<T extends User$createdMeetingsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdMeetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetingAttendees<T extends User$meetingAttendeesArgs<ExtArgs> = {}>(args?: Subset<T, User$meetingAttendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedSpaces<T extends User$ownedSpacesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedSpacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spaceMemberships<T extends User$spaceMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$spaceMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdChannels<T extends User$createdChannelsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentOtpInvites<T extends User$sentOtpInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentOtpInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    issuedWarnings<T extends User$issuedWarningsArgs<ExtArgs> = {}>(args?: Subset<T, User$issuedWarningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recordings
   */
  export type User$recordingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    where?: RecordingWhereInput
    orderBy?: RecordingOrderByWithRelationInput | RecordingOrderByWithRelationInput[]
    cursor?: RecordingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordingScalarFieldEnum | RecordingScalarFieldEnum[]
  }

  /**
   * User.createdMeetings
   */
  export type User$createdMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * User.meetingAttendees
   */
  export type User$meetingAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    where?: MeetingAttendeeWhereInput
    orderBy?: MeetingAttendeeOrderByWithRelationInput | MeetingAttendeeOrderByWithRelationInput[]
    cursor?: MeetingAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingAttendeeScalarFieldEnum | MeetingAttendeeScalarFieldEnum[]
  }

  /**
   * User.ownedSpaces
   */
  export type User$ownedSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    cursor?: SpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * User.spaceMemberships
   */
  export type User$spaceMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    where?: SpaceMemberWhereInput
    orderBy?: SpaceMemberOrderByWithRelationInput | SpaceMemberOrderByWithRelationInput[]
    cursor?: SpaceMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceMemberScalarFieldEnum | SpaceMemberScalarFieldEnum[]
  }

  /**
   * User.createdChannels
   */
  export type User$createdChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.sentOtpInvites
   */
  export type User$sentOtpInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    where?: OtpInviteWhereInput
    orderBy?: OtpInviteOrderByWithRelationInput | OtpInviteOrderByWithRelationInput[]
    cursor?: OtpInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpInviteScalarFieldEnum | OtpInviteScalarFieldEnum[]
  }

  /**
   * User.issuedWarnings
   */
  export type User$issuedWarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    cursor?: WarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Recording
   */

  export type AggregateRecording = {
    _count: RecordingCountAggregateOutputType | null
    _avg: RecordingAvgAggregateOutputType | null
    _sum: RecordingSumAggregateOutputType | null
    _min: RecordingMinAggregateOutputType | null
    _max: RecordingMaxAggregateOutputType | null
  }

  export type RecordingAvgAggregateOutputType = {
    duration: number | null
  }

  export type RecordingSumAggregateOutputType = {
    duration: number | null
  }

  export type RecordingMinAggregateOutputType = {
    id: string | null
    title: string | null
    audioUrl: string | null
    duration: number | null
    transcription: string | null
    summary: string | null
    status: $Enums.RecordingStatus | null
    exportedPdfUrl: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RecordingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    audioUrl: string | null
    duration: number | null
    transcription: string | null
    summary: string | null
    status: $Enums.RecordingStatus | null
    exportedPdfUrl: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RecordingCountAggregateOutputType = {
    id: number
    title: number
    audioUrl: number
    duration: number
    transcription: number
    summary: number
    status: number
    exportedPdfUrl: number
    language: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RecordingAvgAggregateInputType = {
    duration?: true
  }

  export type RecordingSumAggregateInputType = {
    duration?: true
  }

  export type RecordingMinAggregateInputType = {
    id?: true
    title?: true
    audioUrl?: true
    duration?: true
    transcription?: true
    summary?: true
    status?: true
    exportedPdfUrl?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RecordingMaxAggregateInputType = {
    id?: true
    title?: true
    audioUrl?: true
    duration?: true
    transcription?: true
    summary?: true
    status?: true
    exportedPdfUrl?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RecordingCountAggregateInputType = {
    id?: true
    title?: true
    audioUrl?: true
    duration?: true
    transcription?: true
    summary?: true
    status?: true
    exportedPdfUrl?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RecordingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recording to aggregate.
     */
    where?: RecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordings to fetch.
     */
    orderBy?: RecordingOrderByWithRelationInput | RecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recordings
    **/
    _count?: true | RecordingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordingMaxAggregateInputType
  }

  export type GetRecordingAggregateType<T extends RecordingAggregateArgs> = {
        [P in keyof T & keyof AggregateRecording]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecording[P]>
      : GetScalarType<T[P], AggregateRecording[P]>
  }




  export type RecordingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordingWhereInput
    orderBy?: RecordingOrderByWithAggregationInput | RecordingOrderByWithAggregationInput[]
    by: RecordingScalarFieldEnum[] | RecordingScalarFieldEnum
    having?: RecordingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordingCountAggregateInputType | true
    _avg?: RecordingAvgAggregateInputType
    _sum?: RecordingSumAggregateInputType
    _min?: RecordingMinAggregateInputType
    _max?: RecordingMaxAggregateInputType
  }

  export type RecordingGroupByOutputType = {
    id: string
    title: string
    audioUrl: string
    duration: number | null
    transcription: string | null
    summary: string | null
    status: $Enums.RecordingStatus
    exportedPdfUrl: string | null
    language: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: RecordingCountAggregateOutputType | null
    _avg: RecordingAvgAggregateOutputType | null
    _sum: RecordingSumAggregateOutputType | null
    _min: RecordingMinAggregateOutputType | null
    _max: RecordingMaxAggregateOutputType | null
  }

  type GetRecordingGroupByPayload<T extends RecordingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordingGroupByOutputType[P]>
            : GetScalarType<T[P], RecordingGroupByOutputType[P]>
        }
      >
    >


  export type RecordingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    transcription?: boolean
    summary?: boolean
    status?: boolean
    exportedPdfUrl?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recording"]>

  export type RecordingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    transcription?: boolean
    summary?: boolean
    status?: boolean
    exportedPdfUrl?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recording"]>

  export type RecordingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    transcription?: boolean
    summary?: boolean
    status?: boolean
    exportedPdfUrl?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recording"]>

  export type RecordingSelectScalar = {
    id?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    transcription?: boolean
    summary?: boolean
    status?: boolean
    exportedPdfUrl?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type RecordingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "audioUrl" | "duration" | "transcription" | "summary" | "status" | "exportedPdfUrl" | "language" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["recording"]>
  export type RecordingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecordingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecordingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecordingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recording"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      audioUrl: string
      duration: number | null
      transcription: string | null
      summary: string | null
      status: $Enums.RecordingStatus
      exportedPdfUrl: string | null
      language: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["recording"]>
    composites: {}
  }

  type RecordingGetPayload<S extends boolean | null | undefined | RecordingDefaultArgs> = $Result.GetResult<Prisma.$RecordingPayload, S>

  type RecordingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordingCountAggregateInputType | true
    }

  export interface RecordingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recording'], meta: { name: 'Recording' } }
    /**
     * Find zero or one Recording that matches the filter.
     * @param {RecordingFindUniqueArgs} args - Arguments to find a Recording
     * @example
     * // Get one Recording
     * const recording = await prisma.recording.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordingFindUniqueArgs>(args: SelectSubset<T, RecordingFindUniqueArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recording that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordingFindUniqueOrThrowArgs} args - Arguments to find a Recording
     * @example
     * // Get one Recording
     * const recording = await prisma.recording.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordingFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recording that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordingFindFirstArgs} args - Arguments to find a Recording
     * @example
     * // Get one Recording
     * const recording = await prisma.recording.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordingFindFirstArgs>(args?: SelectSubset<T, RecordingFindFirstArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recording that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordingFindFirstOrThrowArgs} args - Arguments to find a Recording
     * @example
     * // Get one Recording
     * const recording = await prisma.recording.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordingFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recordings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recordings
     * const recordings = await prisma.recording.findMany()
     * 
     * // Get first 10 Recordings
     * const recordings = await prisma.recording.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordingWithIdOnly = await prisma.recording.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordingFindManyArgs>(args?: SelectSubset<T, RecordingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recording.
     * @param {RecordingCreateArgs} args - Arguments to create a Recording.
     * @example
     * // Create one Recording
     * const Recording = await prisma.recording.create({
     *   data: {
     *     // ... data to create a Recording
     *   }
     * })
     * 
     */
    create<T extends RecordingCreateArgs>(args: SelectSubset<T, RecordingCreateArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recordings.
     * @param {RecordingCreateManyArgs} args - Arguments to create many Recordings.
     * @example
     * // Create many Recordings
     * const recording = await prisma.recording.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordingCreateManyArgs>(args?: SelectSubset<T, RecordingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recordings and returns the data saved in the database.
     * @param {RecordingCreateManyAndReturnArgs} args - Arguments to create many Recordings.
     * @example
     * // Create many Recordings
     * const recording = await prisma.recording.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recordings and only return the `id`
     * const recordingWithIdOnly = await prisma.recording.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordingCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recording.
     * @param {RecordingDeleteArgs} args - Arguments to delete one Recording.
     * @example
     * // Delete one Recording
     * const Recording = await prisma.recording.delete({
     *   where: {
     *     // ... filter to delete one Recording
     *   }
     * })
     * 
     */
    delete<T extends RecordingDeleteArgs>(args: SelectSubset<T, RecordingDeleteArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recording.
     * @param {RecordingUpdateArgs} args - Arguments to update one Recording.
     * @example
     * // Update one Recording
     * const recording = await prisma.recording.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordingUpdateArgs>(args: SelectSubset<T, RecordingUpdateArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recordings.
     * @param {RecordingDeleteManyArgs} args - Arguments to filter Recordings to delete.
     * @example
     * // Delete a few Recordings
     * const { count } = await prisma.recording.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordingDeleteManyArgs>(args?: SelectSubset<T, RecordingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recordings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recordings
     * const recording = await prisma.recording.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordingUpdateManyArgs>(args: SelectSubset<T, RecordingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recordings and returns the data updated in the database.
     * @param {RecordingUpdateManyAndReturnArgs} args - Arguments to update many Recordings.
     * @example
     * // Update many Recordings
     * const recording = await prisma.recording.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recordings and only return the `id`
     * const recordingWithIdOnly = await prisma.recording.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecordingUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recording.
     * @param {RecordingUpsertArgs} args - Arguments to update or create a Recording.
     * @example
     * // Update or create a Recording
     * const recording = await prisma.recording.upsert({
     *   create: {
     *     // ... data to create a Recording
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recording we want to update
     *   }
     * })
     */
    upsert<T extends RecordingUpsertArgs>(args: SelectSubset<T, RecordingUpsertArgs<ExtArgs>>): Prisma__RecordingClient<$Result.GetResult<Prisma.$RecordingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recordings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordingCountArgs} args - Arguments to filter Recordings to count.
     * @example
     * // Count the number of Recordings
     * const count = await prisma.recording.count({
     *   where: {
     *     // ... the filter for the Recordings we want to count
     *   }
     * })
    **/
    count<T extends RecordingCountArgs>(
      args?: Subset<T, RecordingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recording.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordingAggregateArgs>(args: Subset<T, RecordingAggregateArgs>): Prisma.PrismaPromise<GetRecordingAggregateType<T>>

    /**
     * Group by Recording.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordingGroupByArgs['orderBy'] }
        : { orderBy?: RecordingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recording model
   */
  readonly fields: RecordingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recording.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recording model
   */
  interface RecordingFieldRefs {
    readonly id: FieldRef<"Recording", 'String'>
    readonly title: FieldRef<"Recording", 'String'>
    readonly audioUrl: FieldRef<"Recording", 'String'>
    readonly duration: FieldRef<"Recording", 'Int'>
    readonly transcription: FieldRef<"Recording", 'String'>
    readonly summary: FieldRef<"Recording", 'String'>
    readonly status: FieldRef<"Recording", 'RecordingStatus'>
    readonly exportedPdfUrl: FieldRef<"Recording", 'String'>
    readonly language: FieldRef<"Recording", 'String'>
    readonly createdAt: FieldRef<"Recording", 'DateTime'>
    readonly updatedAt: FieldRef<"Recording", 'DateTime'>
    readonly userId: FieldRef<"Recording", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recording findUnique
   */
  export type RecordingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * Filter, which Recording to fetch.
     */
    where: RecordingWhereUniqueInput
  }

  /**
   * Recording findUniqueOrThrow
   */
  export type RecordingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * Filter, which Recording to fetch.
     */
    where: RecordingWhereUniqueInput
  }

  /**
   * Recording findFirst
   */
  export type RecordingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * Filter, which Recording to fetch.
     */
    where?: RecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordings to fetch.
     */
    orderBy?: RecordingOrderByWithRelationInput | RecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recordings.
     */
    cursor?: RecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recordings.
     */
    distinct?: RecordingScalarFieldEnum | RecordingScalarFieldEnum[]
  }

  /**
   * Recording findFirstOrThrow
   */
  export type RecordingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * Filter, which Recording to fetch.
     */
    where?: RecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordings to fetch.
     */
    orderBy?: RecordingOrderByWithRelationInput | RecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recordings.
     */
    cursor?: RecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recordings.
     */
    distinct?: RecordingScalarFieldEnum | RecordingScalarFieldEnum[]
  }

  /**
   * Recording findMany
   */
  export type RecordingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * Filter, which Recordings to fetch.
     */
    where?: RecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordings to fetch.
     */
    orderBy?: RecordingOrderByWithRelationInput | RecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recordings.
     */
    cursor?: RecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordings.
     */
    skip?: number
    distinct?: RecordingScalarFieldEnum | RecordingScalarFieldEnum[]
  }

  /**
   * Recording create
   */
  export type RecordingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * The data needed to create a Recording.
     */
    data: XOR<RecordingCreateInput, RecordingUncheckedCreateInput>
  }

  /**
   * Recording createMany
   */
  export type RecordingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recordings.
     */
    data: RecordingCreateManyInput | RecordingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recording createManyAndReturn
   */
  export type RecordingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * The data used to create many Recordings.
     */
    data: RecordingCreateManyInput | RecordingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recording update
   */
  export type RecordingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * The data needed to update a Recording.
     */
    data: XOR<RecordingUpdateInput, RecordingUncheckedUpdateInput>
    /**
     * Choose, which Recording to update.
     */
    where: RecordingWhereUniqueInput
  }

  /**
   * Recording updateMany
   */
  export type RecordingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recordings.
     */
    data: XOR<RecordingUpdateManyMutationInput, RecordingUncheckedUpdateManyInput>
    /**
     * Filter which Recordings to update
     */
    where?: RecordingWhereInput
    /**
     * Limit how many Recordings to update.
     */
    limit?: number
  }

  /**
   * Recording updateManyAndReturn
   */
  export type RecordingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * The data used to update Recordings.
     */
    data: XOR<RecordingUpdateManyMutationInput, RecordingUncheckedUpdateManyInput>
    /**
     * Filter which Recordings to update
     */
    where?: RecordingWhereInput
    /**
     * Limit how many Recordings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recording upsert
   */
  export type RecordingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * The filter to search for the Recording to update in case it exists.
     */
    where: RecordingWhereUniqueInput
    /**
     * In case the Recording found by the `where` argument doesn't exist, create a new Recording with this data.
     */
    create: XOR<RecordingCreateInput, RecordingUncheckedCreateInput>
    /**
     * In case the Recording was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordingUpdateInput, RecordingUncheckedUpdateInput>
  }

  /**
   * Recording delete
   */
  export type RecordingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
    /**
     * Filter which Recording to delete.
     */
    where: RecordingWhereUniqueInput
  }

  /**
   * Recording deleteMany
   */
  export type RecordingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recordings to delete
     */
    where?: RecordingWhereInput
    /**
     * Limit how many Recordings to delete.
     */
    limit?: number
  }

  /**
   * Recording without action
   */
  export type RecordingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recording
     */
    select?: RecordingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recording
     */
    omit?: RecordingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordingInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    location: string | null
    description: string | null
    color: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    location: string | null
    description: string | null
    color: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    location: number
    description: number
    color: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    location?: true
    description?: true
    color?: true
    isActive?: true
    createdAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    location?: true
    description?: true
    color?: true
    isActive?: true
    createdAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    location?: true
    description?: true
    color?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    capacity: number
    location: string | null
    description: string | null
    color: string
    isActive: boolean
    createdAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    description?: boolean
    color?: boolean
    isActive?: boolean
    createdAt?: boolean
    meetings?: boolean | Room$meetingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    description?: boolean
    color?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    description?: boolean
    color?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    description?: boolean
    color?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "location" | "description" | "color" | "isActive" | "createdAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Room$meetingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      capacity: number
      location: string | null
      description: string | null
      color: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Room$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly location: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly color: FieldRef<"Room", 'String'>
    readonly isActive: FieldRef<"Room", 'Boolean'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.meetings
   */
  export type Room$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
    userId: string | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
    userId: string | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    color: number
    createdAt: number
    updatedAt: number
    roomId: number
    userId: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    userId?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    userId?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    userId?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date
    color: string | null
    createdAt: Date
    updatedAt: Date
    roomId: string
    userId: string
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    userId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    attendees?: boolean | Meeting$attendeesArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    userId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    userId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    userId?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "color" | "createdAt" | "updatedAt" | "roomId" | "userId", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    attendees?: boolean | Meeting$attendeesArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      attendees: Prisma.$MeetingAttendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date
      color: string | null
      createdAt: Date
      updatedAt: Date
      roomId: string
      userId: string
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendees<T extends Meeting$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly description: FieldRef<"Meeting", 'String'>
    readonly startTime: FieldRef<"Meeting", 'DateTime'>
    readonly endTime: FieldRef<"Meeting", 'DateTime'>
    readonly color: FieldRef<"Meeting", 'String'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
    readonly roomId: FieldRef<"Meeting", 'String'>
    readonly userId: FieldRef<"Meeting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.attendees
   */
  export type Meeting$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    where?: MeetingAttendeeWhereInput
    orderBy?: MeetingAttendeeOrderByWithRelationInput | MeetingAttendeeOrderByWithRelationInput[]
    cursor?: MeetingAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingAttendeeScalarFieldEnum | MeetingAttendeeScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model MeetingAttendee
   */

  export type AggregateMeetingAttendee = {
    _count: MeetingAttendeeCountAggregateOutputType | null
    _min: MeetingAttendeeMinAggregateOutputType | null
    _max: MeetingAttendeeMaxAggregateOutputType | null
  }

  export type MeetingAttendeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    isPresent: boolean | null
    createdAt: Date | null
    meetingId: string | null
    userId: string | null
  }

  export type MeetingAttendeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    isPresent: boolean | null
    createdAt: Date | null
    meetingId: string | null
    userId: string | null
  }

  export type MeetingAttendeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    isPresent: number
    createdAt: number
    meetingId: number
    userId: number
    _all: number
  }


  export type MeetingAttendeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isPresent?: true
    createdAt?: true
    meetingId?: true
    userId?: true
  }

  export type MeetingAttendeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isPresent?: true
    createdAt?: true
    meetingId?: true
    userId?: true
  }

  export type MeetingAttendeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isPresent?: true
    createdAt?: true
    meetingId?: true
    userId?: true
    _all?: true
  }

  export type MeetingAttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingAttendee to aggregate.
     */
    where?: MeetingAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingAttendees to fetch.
     */
    orderBy?: MeetingAttendeeOrderByWithRelationInput | MeetingAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingAttendees
    **/
    _count?: true | MeetingAttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingAttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingAttendeeMaxAggregateInputType
  }

  export type GetMeetingAttendeeAggregateType<T extends MeetingAttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingAttendee[P]>
      : GetScalarType<T[P], AggregateMeetingAttendee[P]>
  }




  export type MeetingAttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingAttendeeWhereInput
    orderBy?: MeetingAttendeeOrderByWithAggregationInput | MeetingAttendeeOrderByWithAggregationInput[]
    by: MeetingAttendeeScalarFieldEnum[] | MeetingAttendeeScalarFieldEnum
    having?: MeetingAttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingAttendeeCountAggregateInputType | true
    _min?: MeetingAttendeeMinAggregateInputType
    _max?: MeetingAttendeeMaxAggregateInputType
  }

  export type MeetingAttendeeGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    isPresent: boolean
    createdAt: Date
    meetingId: string
    userId: string | null
    _count: MeetingAttendeeCountAggregateOutputType | null
    _min: MeetingAttendeeMinAggregateOutputType | null
    _max: MeetingAttendeeMaxAggregateOutputType | null
  }

  type GetMeetingAttendeeGroupByPayload<T extends MeetingAttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingAttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingAttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingAttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingAttendeeGroupByOutputType[P]>
        }
      >
    >


  export type MeetingAttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isPresent?: boolean
    createdAt?: boolean
    meetingId?: boolean
    userId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingAttendee$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingAttendee"]>

  export type MeetingAttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isPresent?: boolean
    createdAt?: boolean
    meetingId?: boolean
    userId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingAttendee$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingAttendee"]>

  export type MeetingAttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isPresent?: boolean
    createdAt?: boolean
    meetingId?: boolean
    userId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingAttendee$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingAttendee"]>

  export type MeetingAttendeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    isPresent?: boolean
    createdAt?: boolean
    meetingId?: boolean
    userId?: boolean
  }

  export type MeetingAttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "isPresent" | "createdAt" | "meetingId" | "userId", ExtArgs["result"]["meetingAttendee"]>
  export type MeetingAttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingAttendee$userArgs<ExtArgs>
  }
  export type MeetingAttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingAttendee$userArgs<ExtArgs>
  }
  export type MeetingAttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingAttendee$userArgs<ExtArgs>
  }

  export type $MeetingAttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingAttendee"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      isPresent: boolean
      createdAt: Date
      meetingId: string
      userId: string | null
    }, ExtArgs["result"]["meetingAttendee"]>
    composites: {}
  }

  type MeetingAttendeeGetPayload<S extends boolean | null | undefined | MeetingAttendeeDefaultArgs> = $Result.GetResult<Prisma.$MeetingAttendeePayload, S>

  type MeetingAttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingAttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingAttendeeCountAggregateInputType | true
    }

  export interface MeetingAttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingAttendee'], meta: { name: 'MeetingAttendee' } }
    /**
     * Find zero or one MeetingAttendee that matches the filter.
     * @param {MeetingAttendeeFindUniqueArgs} args - Arguments to find a MeetingAttendee
     * @example
     * // Get one MeetingAttendee
     * const meetingAttendee = await prisma.meetingAttendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingAttendeeFindUniqueArgs>(args: SelectSubset<T, MeetingAttendeeFindUniqueArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingAttendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingAttendeeFindUniqueOrThrowArgs} args - Arguments to find a MeetingAttendee
     * @example
     * // Get one MeetingAttendee
     * const meetingAttendee = await prisma.meetingAttendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingAttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingAttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingAttendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAttendeeFindFirstArgs} args - Arguments to find a MeetingAttendee
     * @example
     * // Get one MeetingAttendee
     * const meetingAttendee = await prisma.meetingAttendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingAttendeeFindFirstArgs>(args?: SelectSubset<T, MeetingAttendeeFindFirstArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingAttendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAttendeeFindFirstOrThrowArgs} args - Arguments to find a MeetingAttendee
     * @example
     * // Get one MeetingAttendee
     * const meetingAttendee = await prisma.meetingAttendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingAttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingAttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingAttendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingAttendees
     * const meetingAttendees = await prisma.meetingAttendee.findMany()
     * 
     * // Get first 10 MeetingAttendees
     * const meetingAttendees = await prisma.meetingAttendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingAttendeeWithIdOnly = await prisma.meetingAttendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingAttendeeFindManyArgs>(args?: SelectSubset<T, MeetingAttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingAttendee.
     * @param {MeetingAttendeeCreateArgs} args - Arguments to create a MeetingAttendee.
     * @example
     * // Create one MeetingAttendee
     * const MeetingAttendee = await prisma.meetingAttendee.create({
     *   data: {
     *     // ... data to create a MeetingAttendee
     *   }
     * })
     * 
     */
    create<T extends MeetingAttendeeCreateArgs>(args: SelectSubset<T, MeetingAttendeeCreateArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingAttendees.
     * @param {MeetingAttendeeCreateManyArgs} args - Arguments to create many MeetingAttendees.
     * @example
     * // Create many MeetingAttendees
     * const meetingAttendee = await prisma.meetingAttendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingAttendeeCreateManyArgs>(args?: SelectSubset<T, MeetingAttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingAttendees and returns the data saved in the database.
     * @param {MeetingAttendeeCreateManyAndReturnArgs} args - Arguments to create many MeetingAttendees.
     * @example
     * // Create many MeetingAttendees
     * const meetingAttendee = await prisma.meetingAttendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingAttendees and only return the `id`
     * const meetingAttendeeWithIdOnly = await prisma.meetingAttendee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingAttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingAttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingAttendee.
     * @param {MeetingAttendeeDeleteArgs} args - Arguments to delete one MeetingAttendee.
     * @example
     * // Delete one MeetingAttendee
     * const MeetingAttendee = await prisma.meetingAttendee.delete({
     *   where: {
     *     // ... filter to delete one MeetingAttendee
     *   }
     * })
     * 
     */
    delete<T extends MeetingAttendeeDeleteArgs>(args: SelectSubset<T, MeetingAttendeeDeleteArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingAttendee.
     * @param {MeetingAttendeeUpdateArgs} args - Arguments to update one MeetingAttendee.
     * @example
     * // Update one MeetingAttendee
     * const meetingAttendee = await prisma.meetingAttendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingAttendeeUpdateArgs>(args: SelectSubset<T, MeetingAttendeeUpdateArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingAttendees.
     * @param {MeetingAttendeeDeleteManyArgs} args - Arguments to filter MeetingAttendees to delete.
     * @example
     * // Delete a few MeetingAttendees
     * const { count } = await prisma.meetingAttendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingAttendeeDeleteManyArgs>(args?: SelectSubset<T, MeetingAttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingAttendees
     * const meetingAttendee = await prisma.meetingAttendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingAttendeeUpdateManyArgs>(args: SelectSubset<T, MeetingAttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingAttendees and returns the data updated in the database.
     * @param {MeetingAttendeeUpdateManyAndReturnArgs} args - Arguments to update many MeetingAttendees.
     * @example
     * // Update many MeetingAttendees
     * const meetingAttendee = await prisma.meetingAttendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingAttendees and only return the `id`
     * const meetingAttendeeWithIdOnly = await prisma.meetingAttendee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingAttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingAttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingAttendee.
     * @param {MeetingAttendeeUpsertArgs} args - Arguments to update or create a MeetingAttendee.
     * @example
     * // Update or create a MeetingAttendee
     * const meetingAttendee = await prisma.meetingAttendee.upsert({
     *   create: {
     *     // ... data to create a MeetingAttendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingAttendee we want to update
     *   }
     * })
     */
    upsert<T extends MeetingAttendeeUpsertArgs>(args: SelectSubset<T, MeetingAttendeeUpsertArgs<ExtArgs>>): Prisma__MeetingAttendeeClient<$Result.GetResult<Prisma.$MeetingAttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAttendeeCountArgs} args - Arguments to filter MeetingAttendees to count.
     * @example
     * // Count the number of MeetingAttendees
     * const count = await prisma.meetingAttendee.count({
     *   where: {
     *     // ... the filter for the MeetingAttendees we want to count
     *   }
     * })
    **/
    count<T extends MeetingAttendeeCountArgs>(
      args?: Subset<T, MeetingAttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingAttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAttendeeAggregateArgs>(args: Subset<T, MeetingAttendeeAggregateArgs>): Prisma.PrismaPromise<GetMeetingAttendeeAggregateType<T>>

    /**
     * Group by MeetingAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAttendeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingAttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingAttendeeGroupByArgs['orderBy'] }
        : { orderBy?: MeetingAttendeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingAttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingAttendee model
   */
  readonly fields: MeetingAttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingAttendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingAttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends MeetingAttendee$userArgs<ExtArgs> = {}>(args?: Subset<T, MeetingAttendee$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeetingAttendee model
   */
  interface MeetingAttendeeFieldRefs {
    readonly id: FieldRef<"MeetingAttendee", 'String'>
    readonly name: FieldRef<"MeetingAttendee", 'String'>
    readonly email: FieldRef<"MeetingAttendee", 'String'>
    readonly isPresent: FieldRef<"MeetingAttendee", 'Boolean'>
    readonly createdAt: FieldRef<"MeetingAttendee", 'DateTime'>
    readonly meetingId: FieldRef<"MeetingAttendee", 'String'>
    readonly userId: FieldRef<"MeetingAttendee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MeetingAttendee findUnique
   */
  export type MeetingAttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingAttendee to fetch.
     */
    where: MeetingAttendeeWhereUniqueInput
  }

  /**
   * MeetingAttendee findUniqueOrThrow
   */
  export type MeetingAttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingAttendee to fetch.
     */
    where: MeetingAttendeeWhereUniqueInput
  }

  /**
   * MeetingAttendee findFirst
   */
  export type MeetingAttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingAttendee to fetch.
     */
    where?: MeetingAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingAttendees to fetch.
     */
    orderBy?: MeetingAttendeeOrderByWithRelationInput | MeetingAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingAttendees.
     */
    cursor?: MeetingAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingAttendees.
     */
    distinct?: MeetingAttendeeScalarFieldEnum | MeetingAttendeeScalarFieldEnum[]
  }

  /**
   * MeetingAttendee findFirstOrThrow
   */
  export type MeetingAttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingAttendee to fetch.
     */
    where?: MeetingAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingAttendees to fetch.
     */
    orderBy?: MeetingAttendeeOrderByWithRelationInput | MeetingAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingAttendees.
     */
    cursor?: MeetingAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingAttendees.
     */
    distinct?: MeetingAttendeeScalarFieldEnum | MeetingAttendeeScalarFieldEnum[]
  }

  /**
   * MeetingAttendee findMany
   */
  export type MeetingAttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingAttendees to fetch.
     */
    where?: MeetingAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingAttendees to fetch.
     */
    orderBy?: MeetingAttendeeOrderByWithRelationInput | MeetingAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingAttendees.
     */
    cursor?: MeetingAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingAttendees.
     */
    skip?: number
    distinct?: MeetingAttendeeScalarFieldEnum | MeetingAttendeeScalarFieldEnum[]
  }

  /**
   * MeetingAttendee create
   */
  export type MeetingAttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingAttendee.
     */
    data: XOR<MeetingAttendeeCreateInput, MeetingAttendeeUncheckedCreateInput>
  }

  /**
   * MeetingAttendee createMany
   */
  export type MeetingAttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingAttendees.
     */
    data: MeetingAttendeeCreateManyInput | MeetingAttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingAttendee createManyAndReturn
   */
  export type MeetingAttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingAttendees.
     */
    data: MeetingAttendeeCreateManyInput | MeetingAttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingAttendee update
   */
  export type MeetingAttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingAttendee.
     */
    data: XOR<MeetingAttendeeUpdateInput, MeetingAttendeeUncheckedUpdateInput>
    /**
     * Choose, which MeetingAttendee to update.
     */
    where: MeetingAttendeeWhereUniqueInput
  }

  /**
   * MeetingAttendee updateMany
   */
  export type MeetingAttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingAttendees.
     */
    data: XOR<MeetingAttendeeUpdateManyMutationInput, MeetingAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which MeetingAttendees to update
     */
    where?: MeetingAttendeeWhereInput
    /**
     * Limit how many MeetingAttendees to update.
     */
    limit?: number
  }

  /**
   * MeetingAttendee updateManyAndReturn
   */
  export type MeetingAttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * The data used to update MeetingAttendees.
     */
    data: XOR<MeetingAttendeeUpdateManyMutationInput, MeetingAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which MeetingAttendees to update
     */
    where?: MeetingAttendeeWhereInput
    /**
     * Limit how many MeetingAttendees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingAttendee upsert
   */
  export type MeetingAttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingAttendee to update in case it exists.
     */
    where: MeetingAttendeeWhereUniqueInput
    /**
     * In case the MeetingAttendee found by the `where` argument doesn't exist, create a new MeetingAttendee with this data.
     */
    create: XOR<MeetingAttendeeCreateInput, MeetingAttendeeUncheckedCreateInput>
    /**
     * In case the MeetingAttendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingAttendeeUpdateInput, MeetingAttendeeUncheckedUpdateInput>
  }

  /**
   * MeetingAttendee delete
   */
  export type MeetingAttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
    /**
     * Filter which MeetingAttendee to delete.
     */
    where: MeetingAttendeeWhereUniqueInput
  }

  /**
   * MeetingAttendee deleteMany
   */
  export type MeetingAttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingAttendees to delete
     */
    where?: MeetingAttendeeWhereInput
    /**
     * Limit how many MeetingAttendees to delete.
     */
    limit?: number
  }

  /**
   * MeetingAttendee.user
   */
  export type MeetingAttendee$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MeetingAttendee without action
   */
  export type MeetingAttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingAttendee
     */
    select?: MeetingAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingAttendee
     */
    omit?: MeetingAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingAttendeeInclude<ExtArgs> | null
  }


  /**
   * Model Space
   */

  export type AggregateSpace = {
    _count: SpaceCountAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  export type SpaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    objective: string | null
    adminRole: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type SpaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    objective: string | null
    adminRole: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type SpaceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    objective: number
    adminRole: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type SpaceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    objective?: true
    adminRole?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type SpaceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    objective?: true
    adminRole?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type SpaceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    objective?: true
    adminRole?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type SpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Space to aggregate.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spaces
    **/
    _count?: true | SpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceMaxAggregateInputType
  }

  export type GetSpaceAggregateType<T extends SpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpace[P]>
      : GetScalarType<T[P], AggregateSpace[P]>
  }




  export type SpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithAggregationInput | SpaceOrderByWithAggregationInput[]
    by: SpaceScalarFieldEnum[] | SpaceScalarFieldEnum
    having?: SpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceCountAggregateInputType | true
    _min?: SpaceMinAggregateInputType
    _max?: SpaceMaxAggregateInputType
  }

  export type SpaceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    icon: string | null
    objective: string | null
    adminRole: string
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: SpaceCountAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  type GetSpaceGroupByPayload<T extends SpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceGroupByOutputType[P]>
        }
      >
    >


  export type SpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    objective?: boolean
    adminRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Space$membersArgs<ExtArgs>
    channels?: boolean | Space$channelsArgs<ExtArgs>
    otpInvites?: boolean | Space$otpInvitesArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    objective?: boolean
    adminRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    objective?: boolean
    adminRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    objective?: boolean
    adminRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type SpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "objective" | "adminRole" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["space"]>
  export type SpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Space$membersArgs<ExtArgs>
    channels?: boolean | Space$channelsArgs<ExtArgs>
    otpInvites?: boolean | Space$otpInvitesArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Space"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$SpaceMemberPayload<ExtArgs>[]
      channels: Prisma.$ChannelPayload<ExtArgs>[]
      otpInvites: Prisma.$OtpInvitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      icon: string | null
      objective: string | null
      adminRole: string
      createdAt: Date
      updatedAt: Date
      ownerId: string
    }, ExtArgs["result"]["space"]>
    composites: {}
  }

  type SpaceGetPayload<S extends boolean | null | undefined | SpaceDefaultArgs> = $Result.GetResult<Prisma.$SpacePayload, S>

  type SpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceCountAggregateInputType | true
    }

  export interface SpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Space'], meta: { name: 'Space' } }
    /**
     * Find zero or one Space that matches the filter.
     * @param {SpaceFindUniqueArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceFindUniqueArgs>(args: SelectSubset<T, SpaceFindUniqueArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Space that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceFindUniqueOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceFindFirstArgs>(args?: SelectSubset<T, SpaceFindFirstArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Space that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spaces
     * const spaces = await prisma.space.findMany()
     * 
     * // Get first 10 Spaces
     * const spaces = await prisma.space.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceWithIdOnly = await prisma.space.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceFindManyArgs>(args?: SelectSubset<T, SpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Space.
     * @param {SpaceCreateArgs} args - Arguments to create a Space.
     * @example
     * // Create one Space
     * const Space = await prisma.space.create({
     *   data: {
     *     // ... data to create a Space
     *   }
     * })
     * 
     */
    create<T extends SpaceCreateArgs>(args: SelectSubset<T, SpaceCreateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spaces.
     * @param {SpaceCreateManyArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceCreateManyArgs>(args?: SelectSubset<T, SpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spaces and returns the data saved in the database.
     * @param {SpaceCreateManyAndReturnArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, SpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Space.
     * @param {SpaceDeleteArgs} args - Arguments to delete one Space.
     * @example
     * // Delete one Space
     * const Space = await prisma.space.delete({
     *   where: {
     *     // ... filter to delete one Space
     *   }
     * })
     * 
     */
    delete<T extends SpaceDeleteArgs>(args: SelectSubset<T, SpaceDeleteArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Space.
     * @param {SpaceUpdateArgs} args - Arguments to update one Space.
     * @example
     * // Update one Space
     * const space = await prisma.space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceUpdateArgs>(args: SelectSubset<T, SpaceUpdateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spaces.
     * @param {SpaceDeleteManyArgs} args - Arguments to filter Spaces to delete.
     * @example
     * // Delete a few Spaces
     * const { count } = await prisma.space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceDeleteManyArgs>(args?: SelectSubset<T, SpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceUpdateManyArgs>(args: SelectSubset<T, SpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces and returns the data updated in the database.
     * @param {SpaceUpdateManyAndReturnArgs} args - Arguments to update many Spaces.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, SpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Space.
     * @param {SpaceUpsertArgs} args - Arguments to update or create a Space.
     * @example
     * // Update or create a Space
     * const space = await prisma.space.upsert({
     *   create: {
     *     // ... data to create a Space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Space we want to update
     *   }
     * })
     */
    upsert<T extends SpaceUpsertArgs>(args: SelectSubset<T, SpaceUpsertArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceCountArgs} args - Arguments to filter Spaces to count.
     * @example
     * // Count the number of Spaces
     * const count = await prisma.space.count({
     *   where: {
     *     // ... the filter for the Spaces we want to count
     *   }
     * })
    **/
    count<T extends SpaceCountArgs>(
      args?: Subset<T, SpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpaceAggregateArgs>(args: Subset<T, SpaceAggregateArgs>): Prisma.PrismaPromise<GetSpaceAggregateType<T>>

    /**
     * Group by Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceGroupByArgs['orderBy'] }
        : { orderBy?: SpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Space model
   */
  readonly fields: SpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Space$membersArgs<ExtArgs> = {}>(args?: Subset<T, Space$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channels<T extends Space$channelsArgs<ExtArgs> = {}>(args?: Subset<T, Space$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otpInvites<T extends Space$otpInvitesArgs<ExtArgs> = {}>(args?: Subset<T, Space$otpInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Space model
   */
  interface SpaceFieldRefs {
    readonly id: FieldRef<"Space", 'String'>
    readonly name: FieldRef<"Space", 'String'>
    readonly description: FieldRef<"Space", 'String'>
    readonly icon: FieldRef<"Space", 'String'>
    readonly objective: FieldRef<"Space", 'String'>
    readonly adminRole: FieldRef<"Space", 'String'>
    readonly createdAt: FieldRef<"Space", 'DateTime'>
    readonly updatedAt: FieldRef<"Space", 'DateTime'>
    readonly ownerId: FieldRef<"Space", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Space findUnique
   */
  export type SpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findUniqueOrThrow
   */
  export type SpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findFirst
   */
  export type SpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findFirstOrThrow
   */
  export type SpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findMany
   */
  export type SpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Spaces to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space create
   */
  export type SpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Space.
     */
    data: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
  }

  /**
   * Space createMany
   */
  export type SpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Space createManyAndReturn
   */
  export type SpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space update
   */
  export type SpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Space.
     */
    data: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
    /**
     * Choose, which Space to update.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space updateMany
   */
  export type SpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
  }

  /**
   * Space updateManyAndReturn
   */
  export type SpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space upsert
   */
  export type SpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Space to update in case it exists.
     */
    where: SpaceWhereUniqueInput
    /**
     * In case the Space found by the `where` argument doesn't exist, create a new Space with this data.
     */
    create: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
    /**
     * In case the Space was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
  }

  /**
   * Space delete
   */
  export type SpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter which Space to delete.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space deleteMany
   */
  export type SpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spaces to delete
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to delete.
     */
    limit?: number
  }

  /**
   * Space.members
   */
  export type Space$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    where?: SpaceMemberWhereInput
    orderBy?: SpaceMemberOrderByWithRelationInput | SpaceMemberOrderByWithRelationInput[]
    cursor?: SpaceMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceMemberScalarFieldEnum | SpaceMemberScalarFieldEnum[]
  }

  /**
   * Space.channels
   */
  export type Space$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Space.otpInvites
   */
  export type Space$otpInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    where?: OtpInviteWhereInput
    orderBy?: OtpInviteOrderByWithRelationInput | OtpInviteOrderByWithRelationInput[]
    cursor?: OtpInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpInviteScalarFieldEnum | OtpInviteScalarFieldEnum[]
  }

  /**
   * Space without action
   */
  export type SpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
  }


  /**
   * Model SpaceMember
   */

  export type AggregateSpaceMember = {
    _count: SpaceMemberCountAggregateOutputType | null
    _min: SpaceMemberMinAggregateOutputType | null
    _max: SpaceMemberMaxAggregateOutputType | null
  }

  export type SpaceMemberMinAggregateOutputType = {
    id: string | null
    role: $Enums.SpaceRole | null
    status: $Enums.MemberStatus | null
    joinedAt: Date | null
    updatedAt: Date | null
    blockedUntil: Date | null
    spaceId: string | null
    userId: string | null
  }

  export type SpaceMemberMaxAggregateOutputType = {
    id: string | null
    role: $Enums.SpaceRole | null
    status: $Enums.MemberStatus | null
    joinedAt: Date | null
    updatedAt: Date | null
    blockedUntil: Date | null
    spaceId: string | null
    userId: string | null
  }

  export type SpaceMemberCountAggregateOutputType = {
    id: number
    role: number
    status: number
    joinedAt: number
    updatedAt: number
    blockedUntil: number
    spaceId: number
    userId: number
    _all: number
  }


  export type SpaceMemberMinAggregateInputType = {
    id?: true
    role?: true
    status?: true
    joinedAt?: true
    updatedAt?: true
    blockedUntil?: true
    spaceId?: true
    userId?: true
  }

  export type SpaceMemberMaxAggregateInputType = {
    id?: true
    role?: true
    status?: true
    joinedAt?: true
    updatedAt?: true
    blockedUntil?: true
    spaceId?: true
    userId?: true
  }

  export type SpaceMemberCountAggregateInputType = {
    id?: true
    role?: true
    status?: true
    joinedAt?: true
    updatedAt?: true
    blockedUntil?: true
    spaceId?: true
    userId?: true
    _all?: true
  }

  export type SpaceMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpaceMember to aggregate.
     */
    where?: SpaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceMembers to fetch.
     */
    orderBy?: SpaceMemberOrderByWithRelationInput | SpaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpaceMembers
    **/
    _count?: true | SpaceMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceMemberMaxAggregateInputType
  }

  export type GetSpaceMemberAggregateType<T extends SpaceMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateSpaceMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpaceMember[P]>
      : GetScalarType<T[P], AggregateSpaceMember[P]>
  }




  export type SpaceMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceMemberWhereInput
    orderBy?: SpaceMemberOrderByWithAggregationInput | SpaceMemberOrderByWithAggregationInput[]
    by: SpaceMemberScalarFieldEnum[] | SpaceMemberScalarFieldEnum
    having?: SpaceMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceMemberCountAggregateInputType | true
    _min?: SpaceMemberMinAggregateInputType
    _max?: SpaceMemberMaxAggregateInputType
  }

  export type SpaceMemberGroupByOutputType = {
    id: string
    role: $Enums.SpaceRole
    status: $Enums.MemberStatus
    joinedAt: Date
    updatedAt: Date
    blockedUntil: Date | null
    spaceId: string
    userId: string
    _count: SpaceMemberCountAggregateOutputType | null
    _min: SpaceMemberMinAggregateOutputType | null
    _max: SpaceMemberMaxAggregateOutputType | null
  }

  type GetSpaceMemberGroupByPayload<T extends SpaceMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceMemberGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceMemberGroupByOutputType[P]>
        }
      >
    >


  export type SpaceMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    blockedUntil?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    warnings?: boolean | SpaceMember$warningsArgs<ExtArgs>
    notifications?: boolean | SpaceMember$notificationsArgs<ExtArgs>
    _count?: boolean | SpaceMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spaceMember"]>

  export type SpaceMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    blockedUntil?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spaceMember"]>

  export type SpaceMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    blockedUntil?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spaceMember"]>

  export type SpaceMemberSelectScalar = {
    id?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    blockedUntil?: boolean
    spaceId?: boolean
    userId?: boolean
  }

  export type SpaceMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "status" | "joinedAt" | "updatedAt" | "blockedUntil" | "spaceId" | "userId", ExtArgs["result"]["spaceMember"]>
  export type SpaceMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    warnings?: boolean | SpaceMember$warningsArgs<ExtArgs>
    notifications?: boolean | SpaceMember$notificationsArgs<ExtArgs>
    _count?: boolean | SpaceMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpaceMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpaceMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpaceMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpaceMember"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      warnings: Prisma.$WarningPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.SpaceRole
      status: $Enums.MemberStatus
      joinedAt: Date
      updatedAt: Date
      blockedUntil: Date | null
      spaceId: string
      userId: string
    }, ExtArgs["result"]["spaceMember"]>
    composites: {}
  }

  type SpaceMemberGetPayload<S extends boolean | null | undefined | SpaceMemberDefaultArgs> = $Result.GetResult<Prisma.$SpaceMemberPayload, S>

  type SpaceMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceMemberCountAggregateInputType | true
    }

  export interface SpaceMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpaceMember'], meta: { name: 'SpaceMember' } }
    /**
     * Find zero or one SpaceMember that matches the filter.
     * @param {SpaceMemberFindUniqueArgs} args - Arguments to find a SpaceMember
     * @example
     * // Get one SpaceMember
     * const spaceMember = await prisma.spaceMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceMemberFindUniqueArgs>(args: SelectSubset<T, SpaceMemberFindUniqueArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpaceMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceMemberFindUniqueOrThrowArgs} args - Arguments to find a SpaceMember
     * @example
     * // Get one SpaceMember
     * const spaceMember = await prisma.spaceMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpaceMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceMemberFindFirstArgs} args - Arguments to find a SpaceMember
     * @example
     * // Get one SpaceMember
     * const spaceMember = await prisma.spaceMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceMemberFindFirstArgs>(args?: SelectSubset<T, SpaceMemberFindFirstArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpaceMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceMemberFindFirstOrThrowArgs} args - Arguments to find a SpaceMember
     * @example
     * // Get one SpaceMember
     * const spaceMember = await prisma.spaceMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpaceMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpaceMembers
     * const spaceMembers = await prisma.spaceMember.findMany()
     * 
     * // Get first 10 SpaceMembers
     * const spaceMembers = await prisma.spaceMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceMemberWithIdOnly = await prisma.spaceMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceMemberFindManyArgs>(args?: SelectSubset<T, SpaceMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpaceMember.
     * @param {SpaceMemberCreateArgs} args - Arguments to create a SpaceMember.
     * @example
     * // Create one SpaceMember
     * const SpaceMember = await prisma.spaceMember.create({
     *   data: {
     *     // ... data to create a SpaceMember
     *   }
     * })
     * 
     */
    create<T extends SpaceMemberCreateArgs>(args: SelectSubset<T, SpaceMemberCreateArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpaceMembers.
     * @param {SpaceMemberCreateManyArgs} args - Arguments to create many SpaceMembers.
     * @example
     * // Create many SpaceMembers
     * const spaceMember = await prisma.spaceMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceMemberCreateManyArgs>(args?: SelectSubset<T, SpaceMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpaceMembers and returns the data saved in the database.
     * @param {SpaceMemberCreateManyAndReturnArgs} args - Arguments to create many SpaceMembers.
     * @example
     * // Create many SpaceMembers
     * const spaceMember = await prisma.spaceMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpaceMembers and only return the `id`
     * const spaceMemberWithIdOnly = await prisma.spaceMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpaceMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, SpaceMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpaceMember.
     * @param {SpaceMemberDeleteArgs} args - Arguments to delete one SpaceMember.
     * @example
     * // Delete one SpaceMember
     * const SpaceMember = await prisma.spaceMember.delete({
     *   where: {
     *     // ... filter to delete one SpaceMember
     *   }
     * })
     * 
     */
    delete<T extends SpaceMemberDeleteArgs>(args: SelectSubset<T, SpaceMemberDeleteArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpaceMember.
     * @param {SpaceMemberUpdateArgs} args - Arguments to update one SpaceMember.
     * @example
     * // Update one SpaceMember
     * const spaceMember = await prisma.spaceMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceMemberUpdateArgs>(args: SelectSubset<T, SpaceMemberUpdateArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpaceMembers.
     * @param {SpaceMemberDeleteManyArgs} args - Arguments to filter SpaceMembers to delete.
     * @example
     * // Delete a few SpaceMembers
     * const { count } = await prisma.spaceMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceMemberDeleteManyArgs>(args?: SelectSubset<T, SpaceMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpaceMembers
     * const spaceMember = await prisma.spaceMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceMemberUpdateManyArgs>(args: SelectSubset<T, SpaceMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpaceMembers and returns the data updated in the database.
     * @param {SpaceMemberUpdateManyAndReturnArgs} args - Arguments to update many SpaceMembers.
     * @example
     * // Update many SpaceMembers
     * const spaceMember = await prisma.spaceMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpaceMembers and only return the `id`
     * const spaceMemberWithIdOnly = await prisma.spaceMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpaceMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, SpaceMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpaceMember.
     * @param {SpaceMemberUpsertArgs} args - Arguments to update or create a SpaceMember.
     * @example
     * // Update or create a SpaceMember
     * const spaceMember = await prisma.spaceMember.upsert({
     *   create: {
     *     // ... data to create a SpaceMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpaceMember we want to update
     *   }
     * })
     */
    upsert<T extends SpaceMemberUpsertArgs>(args: SelectSubset<T, SpaceMemberUpsertArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceMemberCountArgs} args - Arguments to filter SpaceMembers to count.
     * @example
     * // Count the number of SpaceMembers
     * const count = await prisma.spaceMember.count({
     *   where: {
     *     // ... the filter for the SpaceMembers we want to count
     *   }
     * })
    **/
    count<T extends SpaceMemberCountArgs>(
      args?: Subset<T, SpaceMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpaceMemberAggregateArgs>(args: Subset<T, SpaceMemberAggregateArgs>): Prisma.PrismaPromise<GetSpaceMemberAggregateType<T>>

    /**
     * Group by SpaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpaceMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceMemberGroupByArgs['orderBy'] }
        : { orderBy?: SpaceMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpaceMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpaceMember model
   */
  readonly fields: SpaceMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpaceMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warnings<T extends SpaceMember$warningsArgs<ExtArgs> = {}>(args?: Subset<T, SpaceMember$warningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends SpaceMember$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, SpaceMember$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpaceMember model
   */
  interface SpaceMemberFieldRefs {
    readonly id: FieldRef<"SpaceMember", 'String'>
    readonly role: FieldRef<"SpaceMember", 'SpaceRole'>
    readonly status: FieldRef<"SpaceMember", 'MemberStatus'>
    readonly joinedAt: FieldRef<"SpaceMember", 'DateTime'>
    readonly updatedAt: FieldRef<"SpaceMember", 'DateTime'>
    readonly blockedUntil: FieldRef<"SpaceMember", 'DateTime'>
    readonly spaceId: FieldRef<"SpaceMember", 'String'>
    readonly userId: FieldRef<"SpaceMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SpaceMember findUnique
   */
  export type SpaceMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which SpaceMember to fetch.
     */
    where: SpaceMemberWhereUniqueInput
  }

  /**
   * SpaceMember findUniqueOrThrow
   */
  export type SpaceMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which SpaceMember to fetch.
     */
    where: SpaceMemberWhereUniqueInput
  }

  /**
   * SpaceMember findFirst
   */
  export type SpaceMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which SpaceMember to fetch.
     */
    where?: SpaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceMembers to fetch.
     */
    orderBy?: SpaceMemberOrderByWithRelationInput | SpaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceMembers.
     */
    cursor?: SpaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceMembers.
     */
    distinct?: SpaceMemberScalarFieldEnum | SpaceMemberScalarFieldEnum[]
  }

  /**
   * SpaceMember findFirstOrThrow
   */
  export type SpaceMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which SpaceMember to fetch.
     */
    where?: SpaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceMembers to fetch.
     */
    orderBy?: SpaceMemberOrderByWithRelationInput | SpaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceMembers.
     */
    cursor?: SpaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceMembers.
     */
    distinct?: SpaceMemberScalarFieldEnum | SpaceMemberScalarFieldEnum[]
  }

  /**
   * SpaceMember findMany
   */
  export type SpaceMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which SpaceMembers to fetch.
     */
    where?: SpaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceMembers to fetch.
     */
    orderBy?: SpaceMemberOrderByWithRelationInput | SpaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpaceMembers.
     */
    cursor?: SpaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceMembers.
     */
    skip?: number
    distinct?: SpaceMemberScalarFieldEnum | SpaceMemberScalarFieldEnum[]
  }

  /**
   * SpaceMember create
   */
  export type SpaceMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a SpaceMember.
     */
    data: XOR<SpaceMemberCreateInput, SpaceMemberUncheckedCreateInput>
  }

  /**
   * SpaceMember createMany
   */
  export type SpaceMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpaceMembers.
     */
    data: SpaceMemberCreateManyInput | SpaceMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpaceMember createManyAndReturn
   */
  export type SpaceMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * The data used to create many SpaceMembers.
     */
    data: SpaceMemberCreateManyInput | SpaceMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpaceMember update
   */
  export type SpaceMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a SpaceMember.
     */
    data: XOR<SpaceMemberUpdateInput, SpaceMemberUncheckedUpdateInput>
    /**
     * Choose, which SpaceMember to update.
     */
    where: SpaceMemberWhereUniqueInput
  }

  /**
   * SpaceMember updateMany
   */
  export type SpaceMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpaceMembers.
     */
    data: XOR<SpaceMemberUpdateManyMutationInput, SpaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which SpaceMembers to update
     */
    where?: SpaceMemberWhereInput
    /**
     * Limit how many SpaceMembers to update.
     */
    limit?: number
  }

  /**
   * SpaceMember updateManyAndReturn
   */
  export type SpaceMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * The data used to update SpaceMembers.
     */
    data: XOR<SpaceMemberUpdateManyMutationInput, SpaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which SpaceMembers to update
     */
    where?: SpaceMemberWhereInput
    /**
     * Limit how many SpaceMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpaceMember upsert
   */
  export type SpaceMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the SpaceMember to update in case it exists.
     */
    where: SpaceMemberWhereUniqueInput
    /**
     * In case the SpaceMember found by the `where` argument doesn't exist, create a new SpaceMember with this data.
     */
    create: XOR<SpaceMemberCreateInput, SpaceMemberUncheckedCreateInput>
    /**
     * In case the SpaceMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceMemberUpdateInput, SpaceMemberUncheckedUpdateInput>
  }

  /**
   * SpaceMember delete
   */
  export type SpaceMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
    /**
     * Filter which SpaceMember to delete.
     */
    where: SpaceMemberWhereUniqueInput
  }

  /**
   * SpaceMember deleteMany
   */
  export type SpaceMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpaceMembers to delete
     */
    where?: SpaceMemberWhereInput
    /**
     * Limit how many SpaceMembers to delete.
     */
    limit?: number
  }

  /**
   * SpaceMember.warnings
   */
  export type SpaceMember$warningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    cursor?: WarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * SpaceMember.notifications
   */
  export type SpaceMember$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * SpaceMember without action
   */
  export type SpaceMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceMember
     */
    select?: SpaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpaceMember
     */
    omit?: SpaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceMemberInclude<ExtArgs> | null
  }


  /**
   * Model Warning
   */

  export type AggregateWarning = {
    _count: WarningCountAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  export type WarningMinAggregateOutputType = {
    id: string | null
    reason: string | null
    createdAt: Date | null
    memberId: string | null
    userId: string | null
  }

  export type WarningMaxAggregateOutputType = {
    id: string | null
    reason: string | null
    createdAt: Date | null
    memberId: string | null
    userId: string | null
  }

  export type WarningCountAggregateOutputType = {
    id: number
    reason: number
    createdAt: number
    memberId: number
    userId: number
    _all: number
  }


  export type WarningMinAggregateInputType = {
    id?: true
    reason?: true
    createdAt?: true
    memberId?: true
    userId?: true
  }

  export type WarningMaxAggregateInputType = {
    id?: true
    reason?: true
    createdAt?: true
    memberId?: true
    userId?: true
  }

  export type WarningCountAggregateInputType = {
    id?: true
    reason?: true
    createdAt?: true
    memberId?: true
    userId?: true
    _all?: true
  }

  export type WarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warning to aggregate.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warnings
    **/
    _count?: true | WarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarningMaxAggregateInputType
  }

  export type GetWarningAggregateType<T extends WarningAggregateArgs> = {
        [P in keyof T & keyof AggregateWarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarning[P]>
      : GetScalarType<T[P], AggregateWarning[P]>
  }




  export type WarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithAggregationInput | WarningOrderByWithAggregationInput[]
    by: WarningScalarFieldEnum[] | WarningScalarFieldEnum
    having?: WarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarningCountAggregateInputType | true
    _min?: WarningMinAggregateInputType
    _max?: WarningMaxAggregateInputType
  }

  export type WarningGroupByOutputType = {
    id: string
    reason: string
    createdAt: Date
    memberId: string
    userId: string
    _count: WarningCountAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  type GetWarningGroupByPayload<T extends WarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarningGroupByOutputType[P]>
            : GetScalarType<T[P], WarningGroupByOutputType[P]>
        }
      >
    >


  export type WarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    memberId?: boolean
    userId?: boolean
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    issuedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    memberId?: boolean
    userId?: boolean
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    issuedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    memberId?: boolean
    userId?: boolean
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    issuedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectScalar = {
    id?: boolean
    reason?: boolean
    createdAt?: boolean
    memberId?: boolean
    userId?: boolean
  }

  export type WarningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason" | "createdAt" | "memberId" | "userId", ExtArgs["result"]["warning"]>
  export type WarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    issuedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    issuedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    issuedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warning"
    objects: {
      member: Prisma.$SpaceMemberPayload<ExtArgs>
      issuedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: string
      createdAt: Date
      memberId: string
      userId: string
    }, ExtArgs["result"]["warning"]>
    composites: {}
  }

  type WarningGetPayload<S extends boolean | null | undefined | WarningDefaultArgs> = $Result.GetResult<Prisma.$WarningPayload, S>

  type WarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarningCountAggregateInputType | true
    }

  export interface WarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warning'], meta: { name: 'Warning' } }
    /**
     * Find zero or one Warning that matches the filter.
     * @param {WarningFindUniqueArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarningFindUniqueArgs>(args: SelectSubset<T, WarningFindUniqueArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarningFindUniqueOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarningFindUniqueOrThrowArgs>(args: SelectSubset<T, WarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarningFindFirstArgs>(args?: SelectSubset<T, WarningFindFirstArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarningFindFirstOrThrowArgs>(args?: SelectSubset<T, WarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warnings
     * const warnings = await prisma.warning.findMany()
     * 
     * // Get first 10 Warnings
     * const warnings = await prisma.warning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warningWithIdOnly = await prisma.warning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarningFindManyArgs>(args?: SelectSubset<T, WarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warning.
     * @param {WarningCreateArgs} args - Arguments to create a Warning.
     * @example
     * // Create one Warning
     * const Warning = await prisma.warning.create({
     *   data: {
     *     // ... data to create a Warning
     *   }
     * })
     * 
     */
    create<T extends WarningCreateArgs>(args: SelectSubset<T, WarningCreateArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warnings.
     * @param {WarningCreateManyArgs} args - Arguments to create many Warnings.
     * @example
     * // Create many Warnings
     * const warning = await prisma.warning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarningCreateManyArgs>(args?: SelectSubset<T, WarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warnings and returns the data saved in the database.
     * @param {WarningCreateManyAndReturnArgs} args - Arguments to create many Warnings.
     * @example
     * // Create many Warnings
     * const warning = await prisma.warning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warnings and only return the `id`
     * const warningWithIdOnly = await prisma.warning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarningCreateManyAndReturnArgs>(args?: SelectSubset<T, WarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warning.
     * @param {WarningDeleteArgs} args - Arguments to delete one Warning.
     * @example
     * // Delete one Warning
     * const Warning = await prisma.warning.delete({
     *   where: {
     *     // ... filter to delete one Warning
     *   }
     * })
     * 
     */
    delete<T extends WarningDeleteArgs>(args: SelectSubset<T, WarningDeleteArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warning.
     * @param {WarningUpdateArgs} args - Arguments to update one Warning.
     * @example
     * // Update one Warning
     * const warning = await prisma.warning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarningUpdateArgs>(args: SelectSubset<T, WarningUpdateArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warnings.
     * @param {WarningDeleteManyArgs} args - Arguments to filter Warnings to delete.
     * @example
     * // Delete a few Warnings
     * const { count } = await prisma.warning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarningDeleteManyArgs>(args?: SelectSubset<T, WarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warnings
     * const warning = await prisma.warning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarningUpdateManyArgs>(args: SelectSubset<T, WarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warnings and returns the data updated in the database.
     * @param {WarningUpdateManyAndReturnArgs} args - Arguments to update many Warnings.
     * @example
     * // Update many Warnings
     * const warning = await prisma.warning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warnings and only return the `id`
     * const warningWithIdOnly = await prisma.warning.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarningUpdateManyAndReturnArgs>(args: SelectSubset<T, WarningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warning.
     * @param {WarningUpsertArgs} args - Arguments to update or create a Warning.
     * @example
     * // Update or create a Warning
     * const warning = await prisma.warning.upsert({
     *   create: {
     *     // ... data to create a Warning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warning we want to update
     *   }
     * })
     */
    upsert<T extends WarningUpsertArgs>(args: SelectSubset<T, WarningUpsertArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningCountArgs} args - Arguments to filter Warnings to count.
     * @example
     * // Count the number of Warnings
     * const count = await prisma.warning.count({
     *   where: {
     *     // ... the filter for the Warnings we want to count
     *   }
     * })
    **/
    count<T extends WarningCountArgs>(
      args?: Subset<T, WarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarningAggregateArgs>(args: Subset<T, WarningAggregateArgs>): Prisma.PrismaPromise<GetWarningAggregateType<T>>

    /**
     * Group by Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarningGroupByArgs['orderBy'] }
        : { orderBy?: WarningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warning model
   */
  readonly fields: WarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends SpaceMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceMemberDefaultArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    issuedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warning model
   */
  interface WarningFieldRefs {
    readonly id: FieldRef<"Warning", 'String'>
    readonly reason: FieldRef<"Warning", 'String'>
    readonly createdAt: FieldRef<"Warning", 'DateTime'>
    readonly memberId: FieldRef<"Warning", 'String'>
    readonly userId: FieldRef<"Warning", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Warning findUnique
   */
  export type WarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning findUniqueOrThrow
   */
  export type WarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning findFirst
   */
  export type WarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning findFirstOrThrow
   */
  export type WarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning findMany
   */
  export type WarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warnings to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning create
   */
  export type WarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The data needed to create a Warning.
     */
    data: XOR<WarningCreateInput, WarningUncheckedCreateInput>
  }

  /**
   * Warning createMany
   */
  export type WarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warnings.
     */
    data: WarningCreateManyInput | WarningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warning createManyAndReturn
   */
  export type WarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * The data used to create many Warnings.
     */
    data: WarningCreateManyInput | WarningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warning update
   */
  export type WarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The data needed to update a Warning.
     */
    data: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
    /**
     * Choose, which Warning to update.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning updateMany
   */
  export type WarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warnings.
     */
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyInput>
    /**
     * Filter which Warnings to update
     */
    where?: WarningWhereInput
    /**
     * Limit how many Warnings to update.
     */
    limit?: number
  }

  /**
   * Warning updateManyAndReturn
   */
  export type WarningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * The data used to update Warnings.
     */
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyInput>
    /**
     * Filter which Warnings to update
     */
    where?: WarningWhereInput
    /**
     * Limit how many Warnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warning upsert
   */
  export type WarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The filter to search for the Warning to update in case it exists.
     */
    where: WarningWhereUniqueInput
    /**
     * In case the Warning found by the `where` argument doesn't exist, create a new Warning with this data.
     */
    create: XOR<WarningCreateInput, WarningUncheckedCreateInput>
    /**
     * In case the Warning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
  }

  /**
   * Warning delete
   */
  export type WarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter which Warning to delete.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning deleteMany
   */
  export type WarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warnings to delete
     */
    where?: WarningWhereInput
    /**
     * Limit how many Warnings to delete.
     */
    limit?: number
  }

  /**
   * Warning without action
   */
  export type WarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
  }


  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    spaceId: string | null
    userId: string | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    spaceId: string | null
    userId: string | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isDefault: number
    createdAt: number
    updatedAt: number
    spaceId: number
    userId: number
    _all: number
  }


  export type ChannelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    spaceId?: true
    userId?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    spaceId?: true
    userId?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    spaceId?: true
    userId?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    spaceId: string
    userId: string
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Channel$messagesArgs<ExtArgs>
    notifications?: boolean | Channel$notificationsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spaceId?: boolean
    userId?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isDefault" | "createdAt" | "updatedAt" | "spaceId" | "userId", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Channel$messagesArgs<ExtArgs>
    notifications?: boolean | Channel$notificationsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      spaceId: string
      userId: string
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Channel$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Channel$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Channel$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly name: FieldRef<"Channel", 'String'>
    readonly description: FieldRef<"Channel", 'String'>
    readonly isDefault: FieldRef<"Channel", 'Boolean'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
    readonly spaceId: FieldRef<"Channel", 'String'>
    readonly userId: FieldRef<"Channel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel updateManyAndReturn
   */
  export type ChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel.messages
   */
  export type Channel$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Channel.notifications
   */
  export type Channel$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    fileUrl: string | null
    isPinned: boolean | null
    pinnedAt: Date | null
    editedAt: Date | null
    createdAt: Date | null
    channelId: string | null
    userId: string | null
    replyToId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    fileUrl: string | null
    isPinned: boolean | null
    pinnedAt: Date | null
    editedAt: Date | null
    createdAt: Date | null
    channelId: string | null
    userId: string | null
    replyToId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    type: number
    fileUrl: number
    isPinned: number
    pinnedAt: number
    editedAt: number
    createdAt: number
    channelId: number
    userId: number
    replyToId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    fileUrl?: true
    isPinned?: true
    pinnedAt?: true
    editedAt?: true
    createdAt?: true
    channelId?: true
    userId?: true
    replyToId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    fileUrl?: true
    isPinned?: true
    pinnedAt?: true
    editedAt?: true
    createdAt?: true
    channelId?: true
    userId?: true
    replyToId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    fileUrl?: true
    isPinned?: true
    pinnedAt?: true
    editedAt?: true
    createdAt?: true
    channelId?: true
    userId?: true
    replyToId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    type: $Enums.MessageType
    fileUrl: string | null
    isPinned: boolean
    pinnedAt: Date | null
    editedAt: Date | null
    createdAt: Date
    channelId: string
    userId: string
    replyToId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    isPinned?: boolean
    pinnedAt?: boolean
    editedAt?: boolean
    createdAt?: boolean
    channelId?: boolean
    userId?: boolean
    replyToId?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    notifications?: boolean | Message$notificationsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    isPinned?: boolean
    pinnedAt?: boolean
    editedAt?: boolean
    createdAt?: boolean
    channelId?: boolean
    userId?: boolean
    replyToId?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    isPinned?: boolean
    pinnedAt?: boolean
    editedAt?: boolean
    createdAt?: boolean
    channelId?: boolean
    userId?: boolean
    replyToId?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    isPinned?: boolean
    pinnedAt?: boolean
    editedAt?: boolean
    createdAt?: boolean
    channelId?: boolean
    userId?: boolean
    replyToId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "fileUrl" | "isPinned" | "pinnedAt" | "editedAt" | "createdAt" | "channelId" | "userId" | "replyToId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    notifications?: boolean | Message$notificationsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      replyTo: Prisma.$MessagePayload<ExtArgs> | null
      replies: Prisma.$MessagePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      type: $Enums.MessageType
      fileUrl: string | null
      isPinned: boolean
      pinnedAt: Date | null
      editedAt: Date | null
      createdAt: Date
      channelId: string
      userId: string
      replyToId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    replyTo<T extends Message$replyToArgs<ExtArgs> = {}>(args?: Subset<T, Message$replyToArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Message$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Message$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Message$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Message$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly fileUrl: FieldRef<"Message", 'String'>
    readonly isPinned: FieldRef<"Message", 'Boolean'>
    readonly pinnedAt: FieldRef<"Message", 'DateTime'>
    readonly editedAt: FieldRef<"Message", 'DateTime'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly channelId: FieldRef<"Message", 'String'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly replyToId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.replyTo
   */
  export type Message$replyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Message.replies
   */
  export type Message$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message.notifications
   */
  export type Message$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model OtpInvite
   */

  export type AggregateOtpInvite = {
    _count: OtpInviteCountAggregateOutputType | null
    _min: OtpInviteMinAggregateOutputType | null
    _max: OtpInviteMaxAggregateOutputType | null
  }

  export type OtpInviteMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
    spaceId: string | null
    userId: string | null
  }

  export type OtpInviteMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
    spaceId: string | null
    userId: string | null
  }

  export type OtpInviteCountAggregateOutputType = {
    id: number
    email: number
    code: number
    expiresAt: number
    usedAt: number
    createdAt: number
    spaceId: number
    userId: number
    _all: number
  }


  export type OtpInviteMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    spaceId?: true
    userId?: true
  }

  export type OtpInviteMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    spaceId?: true
    userId?: true
  }

  export type OtpInviteCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    spaceId?: true
    userId?: true
    _all?: true
  }

  export type OtpInviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpInvite to aggregate.
     */
    where?: OtpInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpInvites to fetch.
     */
    orderBy?: OtpInviteOrderByWithRelationInput | OtpInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpInvites
    **/
    _count?: true | OtpInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpInviteMaxAggregateInputType
  }

  export type GetOtpInviteAggregateType<T extends OtpInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpInvite[P]>
      : GetScalarType<T[P], AggregateOtpInvite[P]>
  }




  export type OtpInviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpInviteWhereInput
    orderBy?: OtpInviteOrderByWithAggregationInput | OtpInviteOrderByWithAggregationInput[]
    by: OtpInviteScalarFieldEnum[] | OtpInviteScalarFieldEnum
    having?: OtpInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpInviteCountAggregateInputType | true
    _min?: OtpInviteMinAggregateInputType
    _max?: OtpInviteMaxAggregateInputType
  }

  export type OtpInviteGroupByOutputType = {
    id: string
    email: string
    code: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    spaceId: string
    userId: string
    _count: OtpInviteCountAggregateOutputType | null
    _min: OtpInviteMinAggregateOutputType | null
    _max: OtpInviteMaxAggregateOutputType | null
  }

  type GetOtpInviteGroupByPayload<T extends OtpInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpInviteGroupByOutputType[P]>
            : GetScalarType<T[P], OtpInviteGroupByOutputType[P]>
        }
      >
    >


  export type OtpInviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    sentBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpInvite"]>

  export type OtpInviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    sentBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpInvite"]>

  export type OtpInviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    spaceId?: boolean
    userId?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    sentBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpInvite"]>

  export type OtpInviteSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    spaceId?: boolean
    userId?: boolean
  }

  export type OtpInviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "expiresAt" | "usedAt" | "createdAt" | "spaceId" | "userId", ExtArgs["result"]["otpInvite"]>
  export type OtpInviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    sentBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpInviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    sentBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpInviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
    sentBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpInvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpInvite"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>
      sentBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      code: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
      spaceId: string
      userId: string
    }, ExtArgs["result"]["otpInvite"]>
    composites: {}
  }

  type OtpInviteGetPayload<S extends boolean | null | undefined | OtpInviteDefaultArgs> = $Result.GetResult<Prisma.$OtpInvitePayload, S>

  type OtpInviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpInviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpInviteCountAggregateInputType | true
    }

  export interface OtpInviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpInvite'], meta: { name: 'OtpInvite' } }
    /**
     * Find zero or one OtpInvite that matches the filter.
     * @param {OtpInviteFindUniqueArgs} args - Arguments to find a OtpInvite
     * @example
     * // Get one OtpInvite
     * const otpInvite = await prisma.otpInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpInviteFindUniqueArgs>(args: SelectSubset<T, OtpInviteFindUniqueArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpInviteFindUniqueOrThrowArgs} args - Arguments to find a OtpInvite
     * @example
     * // Get one OtpInvite
     * const otpInvite = await prisma.otpInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpInviteFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpInviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpInviteFindFirstArgs} args - Arguments to find a OtpInvite
     * @example
     * // Get one OtpInvite
     * const otpInvite = await prisma.otpInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpInviteFindFirstArgs>(args?: SelectSubset<T, OtpInviteFindFirstArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpInviteFindFirstOrThrowArgs} args - Arguments to find a OtpInvite
     * @example
     * // Get one OtpInvite
     * const otpInvite = await prisma.otpInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpInviteFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpInviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpInvites
     * const otpInvites = await prisma.otpInvite.findMany()
     * 
     * // Get first 10 OtpInvites
     * const otpInvites = await prisma.otpInvite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpInviteWithIdOnly = await prisma.otpInvite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpInviteFindManyArgs>(args?: SelectSubset<T, OtpInviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpInvite.
     * @param {OtpInviteCreateArgs} args - Arguments to create a OtpInvite.
     * @example
     * // Create one OtpInvite
     * const OtpInvite = await prisma.otpInvite.create({
     *   data: {
     *     // ... data to create a OtpInvite
     *   }
     * })
     * 
     */
    create<T extends OtpInviteCreateArgs>(args: SelectSubset<T, OtpInviteCreateArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpInvites.
     * @param {OtpInviteCreateManyArgs} args - Arguments to create many OtpInvites.
     * @example
     * // Create many OtpInvites
     * const otpInvite = await prisma.otpInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpInviteCreateManyArgs>(args?: SelectSubset<T, OtpInviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpInvites and returns the data saved in the database.
     * @param {OtpInviteCreateManyAndReturnArgs} args - Arguments to create many OtpInvites.
     * @example
     * // Create many OtpInvites
     * const otpInvite = await prisma.otpInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpInvites and only return the `id`
     * const otpInviteWithIdOnly = await prisma.otpInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpInviteCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpInviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpInvite.
     * @param {OtpInviteDeleteArgs} args - Arguments to delete one OtpInvite.
     * @example
     * // Delete one OtpInvite
     * const OtpInvite = await prisma.otpInvite.delete({
     *   where: {
     *     // ... filter to delete one OtpInvite
     *   }
     * })
     * 
     */
    delete<T extends OtpInviteDeleteArgs>(args: SelectSubset<T, OtpInviteDeleteArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpInvite.
     * @param {OtpInviteUpdateArgs} args - Arguments to update one OtpInvite.
     * @example
     * // Update one OtpInvite
     * const otpInvite = await prisma.otpInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpInviteUpdateArgs>(args: SelectSubset<T, OtpInviteUpdateArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpInvites.
     * @param {OtpInviteDeleteManyArgs} args - Arguments to filter OtpInvites to delete.
     * @example
     * // Delete a few OtpInvites
     * const { count } = await prisma.otpInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpInviteDeleteManyArgs>(args?: SelectSubset<T, OtpInviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpInvites
     * const otpInvite = await prisma.otpInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpInviteUpdateManyArgs>(args: SelectSubset<T, OtpInviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpInvites and returns the data updated in the database.
     * @param {OtpInviteUpdateManyAndReturnArgs} args - Arguments to update many OtpInvites.
     * @example
     * // Update many OtpInvites
     * const otpInvite = await prisma.otpInvite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpInvites and only return the `id`
     * const otpInviteWithIdOnly = await prisma.otpInvite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpInviteUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpInviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpInvite.
     * @param {OtpInviteUpsertArgs} args - Arguments to update or create a OtpInvite.
     * @example
     * // Update or create a OtpInvite
     * const otpInvite = await prisma.otpInvite.upsert({
     *   create: {
     *     // ... data to create a OtpInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpInvite we want to update
     *   }
     * })
     */
    upsert<T extends OtpInviteUpsertArgs>(args: SelectSubset<T, OtpInviteUpsertArgs<ExtArgs>>): Prisma__OtpInviteClient<$Result.GetResult<Prisma.$OtpInvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpInviteCountArgs} args - Arguments to filter OtpInvites to count.
     * @example
     * // Count the number of OtpInvites
     * const count = await prisma.otpInvite.count({
     *   where: {
     *     // ... the filter for the OtpInvites we want to count
     *   }
     * })
    **/
    count<T extends OtpInviteCountArgs>(
      args?: Subset<T, OtpInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpInviteAggregateArgs>(args: Subset<T, OtpInviteAggregateArgs>): Prisma.PrismaPromise<GetOtpInviteAggregateType<T>>

    /**
     * Group by OtpInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpInviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpInviteGroupByArgs['orderBy'] }
        : { orderBy?: OtpInviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpInvite model
   */
  readonly fields: OtpInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpInviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sentBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtpInvite model
   */
  interface OtpInviteFieldRefs {
    readonly id: FieldRef<"OtpInvite", 'String'>
    readonly email: FieldRef<"OtpInvite", 'String'>
    readonly code: FieldRef<"OtpInvite", 'String'>
    readonly expiresAt: FieldRef<"OtpInvite", 'DateTime'>
    readonly usedAt: FieldRef<"OtpInvite", 'DateTime'>
    readonly createdAt: FieldRef<"OtpInvite", 'DateTime'>
    readonly spaceId: FieldRef<"OtpInvite", 'String'>
    readonly userId: FieldRef<"OtpInvite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OtpInvite findUnique
   */
  export type OtpInviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * Filter, which OtpInvite to fetch.
     */
    where: OtpInviteWhereUniqueInput
  }

  /**
   * OtpInvite findUniqueOrThrow
   */
  export type OtpInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * Filter, which OtpInvite to fetch.
     */
    where: OtpInviteWhereUniqueInput
  }

  /**
   * OtpInvite findFirst
   */
  export type OtpInviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * Filter, which OtpInvite to fetch.
     */
    where?: OtpInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpInvites to fetch.
     */
    orderBy?: OtpInviteOrderByWithRelationInput | OtpInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpInvites.
     */
    cursor?: OtpInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpInvites.
     */
    distinct?: OtpInviteScalarFieldEnum | OtpInviteScalarFieldEnum[]
  }

  /**
   * OtpInvite findFirstOrThrow
   */
  export type OtpInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * Filter, which OtpInvite to fetch.
     */
    where?: OtpInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpInvites to fetch.
     */
    orderBy?: OtpInviteOrderByWithRelationInput | OtpInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpInvites.
     */
    cursor?: OtpInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpInvites.
     */
    distinct?: OtpInviteScalarFieldEnum | OtpInviteScalarFieldEnum[]
  }

  /**
   * OtpInvite findMany
   */
  export type OtpInviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * Filter, which OtpInvites to fetch.
     */
    where?: OtpInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpInvites to fetch.
     */
    orderBy?: OtpInviteOrderByWithRelationInput | OtpInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpInvites.
     */
    cursor?: OtpInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpInvites.
     */
    skip?: number
    distinct?: OtpInviteScalarFieldEnum | OtpInviteScalarFieldEnum[]
  }

  /**
   * OtpInvite create
   */
  export type OtpInviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a OtpInvite.
     */
    data: XOR<OtpInviteCreateInput, OtpInviteUncheckedCreateInput>
  }

  /**
   * OtpInvite createMany
   */
  export type OtpInviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpInvites.
     */
    data: OtpInviteCreateManyInput | OtpInviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpInvite createManyAndReturn
   */
  export type OtpInviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * The data used to create many OtpInvites.
     */
    data: OtpInviteCreateManyInput | OtpInviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpInvite update
   */
  export type OtpInviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a OtpInvite.
     */
    data: XOR<OtpInviteUpdateInput, OtpInviteUncheckedUpdateInput>
    /**
     * Choose, which OtpInvite to update.
     */
    where: OtpInviteWhereUniqueInput
  }

  /**
   * OtpInvite updateMany
   */
  export type OtpInviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpInvites.
     */
    data: XOR<OtpInviteUpdateManyMutationInput, OtpInviteUncheckedUpdateManyInput>
    /**
     * Filter which OtpInvites to update
     */
    where?: OtpInviteWhereInput
    /**
     * Limit how many OtpInvites to update.
     */
    limit?: number
  }

  /**
   * OtpInvite updateManyAndReturn
   */
  export type OtpInviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * The data used to update OtpInvites.
     */
    data: XOR<OtpInviteUpdateManyMutationInput, OtpInviteUncheckedUpdateManyInput>
    /**
     * Filter which OtpInvites to update
     */
    where?: OtpInviteWhereInput
    /**
     * Limit how many OtpInvites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpInvite upsert
   */
  export type OtpInviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the OtpInvite to update in case it exists.
     */
    where: OtpInviteWhereUniqueInput
    /**
     * In case the OtpInvite found by the `where` argument doesn't exist, create a new OtpInvite with this data.
     */
    create: XOR<OtpInviteCreateInput, OtpInviteUncheckedCreateInput>
    /**
     * In case the OtpInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpInviteUpdateInput, OtpInviteUncheckedUpdateInput>
  }

  /**
   * OtpInvite delete
   */
  export type OtpInviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
    /**
     * Filter which OtpInvite to delete.
     */
    where: OtpInviteWhereUniqueInput
  }

  /**
   * OtpInvite deleteMany
   */
  export type OtpInviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpInvites to delete
     */
    where?: OtpInviteWhereInput
    /**
     * Limit how many OtpInvites to delete.
     */
    limit?: number
  }

  /**
   * OtpInvite without action
   */
  export type OtpInviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpInvite
     */
    select?: OtpInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpInvite
     */
    omit?: OtpInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInviteInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    read: boolean | null
    createdAt: Date | null
    memberId: string | null
    channelId: string | null
    messageId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    read: boolean | null
    createdAt: Date | null
    memberId: string | null
    channelId: string | null
    messageId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    read: number
    createdAt: number
    memberId: number
    channelId: number
    messageId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    read?: true
    createdAt?: true
    memberId?: true
    channelId?: true
    messageId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    read?: true
    createdAt?: true
    memberId?: true
    channelId?: true
    messageId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    read?: true
    createdAt?: true
    memberId?: true
    channelId?: true
    messageId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    read: boolean
    createdAt: Date
    memberId: string
    channelId: string | null
    messageId: string | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    memberId?: boolean
    channelId?: boolean
    messageId?: boolean
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    channel?: boolean | Notification$channelArgs<ExtArgs>
    message?: boolean | Notification$messageArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    memberId?: boolean
    channelId?: boolean
    messageId?: boolean
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    channel?: boolean | Notification$channelArgs<ExtArgs>
    message?: boolean | Notification$messageArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    memberId?: boolean
    channelId?: boolean
    messageId?: boolean
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    channel?: boolean | Notification$channelArgs<ExtArgs>
    message?: boolean | Notification$messageArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    memberId?: boolean
    channelId?: boolean
    messageId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "read" | "createdAt" | "memberId" | "channelId" | "messageId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    channel?: boolean | Notification$channelArgs<ExtArgs>
    message?: boolean | Notification$messageArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    channel?: boolean | Notification$channelArgs<ExtArgs>
    message?: boolean | Notification$messageArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | SpaceMemberDefaultArgs<ExtArgs>
    channel?: boolean | Notification$channelArgs<ExtArgs>
    message?: boolean | Notification$messageArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      member: Prisma.$SpaceMemberPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs> | null
      message: Prisma.$MessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      read: boolean
      createdAt: Date
      memberId: string
      channelId: string | null
      messageId: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends SpaceMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceMemberDefaultArgs<ExtArgs>>): Prisma__SpaceMemberClient<$Result.GetResult<Prisma.$SpaceMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends Notification$channelArgs<ExtArgs> = {}>(args?: Subset<T, Notification$channelArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    message<T extends Notification$messageArgs<ExtArgs> = {}>(args?: Subset<T, Notification$messageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly memberId: FieldRef<"Notification", 'String'>
    readonly channelId: FieldRef<"Notification", 'String'>
    readonly messageId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.channel
   */
  export type Notification$channelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
  }

  /**
   * Notification.message
   */
  export type Notification$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    bio: 'bio',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecordingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    audioUrl: 'audioUrl',
    duration: 'duration',
    transcription: 'transcription',
    summary: 'summary',
    status: 'status',
    exportedPdfUrl: 'exportedPdfUrl',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type RecordingScalarFieldEnum = (typeof RecordingScalarFieldEnum)[keyof typeof RecordingScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    location: 'location',
    description: 'description',
    color: 'color',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roomId: 'roomId',
    userId: 'userId'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const MeetingAttendeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    isPresent: 'isPresent',
    createdAt: 'createdAt',
    meetingId: 'meetingId',
    userId: 'userId'
  };

  export type MeetingAttendeeScalarFieldEnum = (typeof MeetingAttendeeScalarFieldEnum)[keyof typeof MeetingAttendeeScalarFieldEnum]


  export const SpaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    objective: 'objective',
    adminRole: 'adminRole',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type SpaceScalarFieldEnum = (typeof SpaceScalarFieldEnum)[keyof typeof SpaceScalarFieldEnum]


  export const SpaceMemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    status: 'status',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt',
    blockedUntil: 'blockedUntil',
    spaceId: 'spaceId',
    userId: 'userId'
  };

  export type SpaceMemberScalarFieldEnum = (typeof SpaceMemberScalarFieldEnum)[keyof typeof SpaceMemberScalarFieldEnum]


  export const WarningScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    createdAt: 'createdAt',
    memberId: 'memberId',
    userId: 'userId'
  };

  export type WarningScalarFieldEnum = (typeof WarningScalarFieldEnum)[keyof typeof WarningScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    spaceId: 'spaceId',
    userId: 'userId'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    fileUrl: 'fileUrl',
    isPinned: 'isPinned',
    pinnedAt: 'pinnedAt',
    editedAt: 'editedAt',
    createdAt: 'createdAt',
    channelId: 'channelId',
    userId: 'userId',
    replyToId: 'replyToId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const OtpInviteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt',
    spaceId: 'spaceId',
    userId: 'userId'
  };

  export type OtpInviteScalarFieldEnum = (typeof OtpInviteScalarFieldEnum)[keyof typeof OtpInviteScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    read: 'read',
    createdAt: 'createdAt',
    memberId: 'memberId',
    channelId: 'channelId',
    messageId: 'messageId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RecordingStatus'
   */
  export type EnumRecordingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordingStatus'>
    


  /**
   * Reference to a field of type 'RecordingStatus[]'
   */
  export type ListEnumRecordingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordingStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SpaceRole'
   */
  export type EnumSpaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpaceRole'>
    


  /**
   * Reference to a field of type 'SpaceRole[]'
   */
  export type ListEnumSpaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpaceRole[]'>
    


  /**
   * Reference to a field of type 'MemberStatus'
   */
  export type EnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus'>
    


  /**
   * Reference to a field of type 'MemberStatus[]'
   */
  export type ListEnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recordings?: RecordingListRelationFilter
    createdMeetings?: MeetingListRelationFilter
    meetingAttendees?: MeetingAttendeeListRelationFilter
    ownedSpaces?: SpaceListRelationFilter
    spaceMemberships?: SpaceMemberListRelationFilter
    createdChannels?: ChannelListRelationFilter
    messages?: MessageListRelationFilter
    sentOtpInvites?: OtpInviteListRelationFilter
    issuedWarnings?: WarningListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recordings?: RecordingOrderByRelationAggregateInput
    createdMeetings?: MeetingOrderByRelationAggregateInput
    meetingAttendees?: MeetingAttendeeOrderByRelationAggregateInput
    ownedSpaces?: SpaceOrderByRelationAggregateInput
    spaceMemberships?: SpaceMemberOrderByRelationAggregateInput
    createdChannels?: ChannelOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    sentOtpInvites?: OtpInviteOrderByRelationAggregateInput
    issuedWarnings?: WarningOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recordings?: RecordingListRelationFilter
    createdMeetings?: MeetingListRelationFilter
    meetingAttendees?: MeetingAttendeeListRelationFilter
    ownedSpaces?: SpaceListRelationFilter
    spaceMemberships?: SpaceMemberListRelationFilter
    createdChannels?: ChannelListRelationFilter
    messages?: MessageListRelationFilter
    sentOtpInvites?: OtpInviteListRelationFilter
    issuedWarnings?: WarningListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RecordingWhereInput = {
    AND?: RecordingWhereInput | RecordingWhereInput[]
    OR?: RecordingWhereInput[]
    NOT?: RecordingWhereInput | RecordingWhereInput[]
    id?: StringFilter<"Recording"> | string
    title?: StringFilter<"Recording"> | string
    audioUrl?: StringFilter<"Recording"> | string
    duration?: IntNullableFilter<"Recording"> | number | null
    transcription?: StringNullableFilter<"Recording"> | string | null
    summary?: StringNullableFilter<"Recording"> | string | null
    status?: EnumRecordingStatusFilter<"Recording"> | $Enums.RecordingStatus
    exportedPdfUrl?: StringNullableFilter<"Recording"> | string | null
    language?: StringFilter<"Recording"> | string
    createdAt?: DateTimeFilter<"Recording"> | Date | string
    updatedAt?: DateTimeFilter<"Recording"> | Date | string
    userId?: StringFilter<"Recording"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecordingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    transcription?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrder
    exportedPdfUrl?: SortOrderInput | SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type RecordingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecordingWhereInput | RecordingWhereInput[]
    OR?: RecordingWhereInput[]
    NOT?: RecordingWhereInput | RecordingWhereInput[]
    title?: StringFilter<"Recording"> | string
    audioUrl?: StringFilter<"Recording"> | string
    duration?: IntNullableFilter<"Recording"> | number | null
    transcription?: StringNullableFilter<"Recording"> | string | null
    summary?: StringNullableFilter<"Recording"> | string | null
    status?: EnumRecordingStatusFilter<"Recording"> | $Enums.RecordingStatus
    exportedPdfUrl?: StringNullableFilter<"Recording"> | string | null
    language?: StringFilter<"Recording"> | string
    createdAt?: DateTimeFilter<"Recording"> | Date | string
    updatedAt?: DateTimeFilter<"Recording"> | Date | string
    userId?: StringFilter<"Recording"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecordingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    transcription?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrder
    exportedPdfUrl?: SortOrderInput | SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: RecordingCountOrderByAggregateInput
    _avg?: RecordingAvgOrderByAggregateInput
    _max?: RecordingMaxOrderByAggregateInput
    _min?: RecordingMinOrderByAggregateInput
    _sum?: RecordingSumOrderByAggregateInput
  }

  export type RecordingScalarWhereWithAggregatesInput = {
    AND?: RecordingScalarWhereWithAggregatesInput | RecordingScalarWhereWithAggregatesInput[]
    OR?: RecordingScalarWhereWithAggregatesInput[]
    NOT?: RecordingScalarWhereWithAggregatesInput | RecordingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recording"> | string
    title?: StringWithAggregatesFilter<"Recording"> | string
    audioUrl?: StringWithAggregatesFilter<"Recording"> | string
    duration?: IntNullableWithAggregatesFilter<"Recording"> | number | null
    transcription?: StringNullableWithAggregatesFilter<"Recording"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Recording"> | string | null
    status?: EnumRecordingStatusWithAggregatesFilter<"Recording"> | $Enums.RecordingStatus
    exportedPdfUrl?: StringNullableWithAggregatesFilter<"Recording"> | string | null
    language?: StringWithAggregatesFilter<"Recording"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recording"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recording"> | Date | string
    userId?: StringWithAggregatesFilter<"Recording"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    location?: StringNullableFilter<"Room"> | string | null
    description?: StringNullableFilter<"Room"> | string | null
    color?: StringFilter<"Room"> | string
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    meetings?: MeetingListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    location?: StringNullableFilter<"Room"> | string | null
    description?: StringNullableFilter<"Room"> | string | null
    color?: StringFilter<"Room"> | string
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    meetings?: MeetingListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    location?: StringNullableWithAggregatesFilter<"Room"> | string | null
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    color?: StringWithAggregatesFilter<"Room"> | string
    isActive?: BoolWithAggregatesFilter<"Room"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    color?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    roomId?: StringFilter<"Meeting"> | string
    userId?: StringFilter<"Meeting"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendees?: MeetingAttendeeListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    room?: RoomOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    attendees?: MeetingAttendeeOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    color?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    roomId?: StringFilter<"Meeting"> | string
    userId?: StringFilter<"Meeting"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendees?: MeetingAttendeeListRelationFilter
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    title?: StringWithAggregatesFilter<"Meeting"> | string
    description?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    color?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    roomId?: StringWithAggregatesFilter<"Meeting"> | string
    userId?: StringWithAggregatesFilter<"Meeting"> | string
  }

  export type MeetingAttendeeWhereInput = {
    AND?: MeetingAttendeeWhereInput | MeetingAttendeeWhereInput[]
    OR?: MeetingAttendeeWhereInput[]
    NOT?: MeetingAttendeeWhereInput | MeetingAttendeeWhereInput[]
    id?: StringFilter<"MeetingAttendee"> | string
    name?: StringNullableFilter<"MeetingAttendee"> | string | null
    email?: StringNullableFilter<"MeetingAttendee"> | string | null
    isPresent?: BoolFilter<"MeetingAttendee"> | boolean
    createdAt?: DateTimeFilter<"MeetingAttendee"> | Date | string
    meetingId?: StringFilter<"MeetingAttendee"> | string
    userId?: StringNullableFilter<"MeetingAttendee"> | string | null
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MeetingAttendeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isPresent?: SortOrder
    createdAt?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    meeting?: MeetingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MeetingAttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    meetingId_userId?: MeetingAttendeeMeetingIdUserIdCompoundUniqueInput
    AND?: MeetingAttendeeWhereInput | MeetingAttendeeWhereInput[]
    OR?: MeetingAttendeeWhereInput[]
    NOT?: MeetingAttendeeWhereInput | MeetingAttendeeWhereInput[]
    name?: StringNullableFilter<"MeetingAttendee"> | string | null
    email?: StringNullableFilter<"MeetingAttendee"> | string | null
    isPresent?: BoolFilter<"MeetingAttendee"> | boolean
    createdAt?: DateTimeFilter<"MeetingAttendee"> | Date | string
    meetingId?: StringFilter<"MeetingAttendee"> | string
    userId?: StringNullableFilter<"MeetingAttendee"> | string | null
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "meetingId_userId">

  export type MeetingAttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isPresent?: SortOrder
    createdAt?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: MeetingAttendeeCountOrderByAggregateInput
    _max?: MeetingAttendeeMaxOrderByAggregateInput
    _min?: MeetingAttendeeMinOrderByAggregateInput
  }

  export type MeetingAttendeeScalarWhereWithAggregatesInput = {
    AND?: MeetingAttendeeScalarWhereWithAggregatesInput | MeetingAttendeeScalarWhereWithAggregatesInput[]
    OR?: MeetingAttendeeScalarWhereWithAggregatesInput[]
    NOT?: MeetingAttendeeScalarWhereWithAggregatesInput | MeetingAttendeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeetingAttendee"> | string
    name?: StringNullableWithAggregatesFilter<"MeetingAttendee"> | string | null
    email?: StringNullableWithAggregatesFilter<"MeetingAttendee"> | string | null
    isPresent?: BoolWithAggregatesFilter<"MeetingAttendee"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MeetingAttendee"> | Date | string
    meetingId?: StringWithAggregatesFilter<"MeetingAttendee"> | string
    userId?: StringNullableWithAggregatesFilter<"MeetingAttendee"> | string | null
  }

  export type SpaceWhereInput = {
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    id?: StringFilter<"Space"> | string
    name?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    icon?: StringNullableFilter<"Space"> | string | null
    objective?: StringNullableFilter<"Space"> | string | null
    adminRole?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    ownerId?: StringFilter<"Space"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: SpaceMemberListRelationFilter
    channels?: ChannelListRelationFilter
    otpInvites?: OtpInviteListRelationFilter
  }

  export type SpaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    adminRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: SpaceMemberOrderByRelationAggregateInput
    channels?: ChannelOrderByRelationAggregateInput
    otpInvites?: OtpInviteOrderByRelationAggregateInput
  }

  export type SpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    name?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    icon?: StringNullableFilter<"Space"> | string | null
    objective?: StringNullableFilter<"Space"> | string | null
    adminRole?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    ownerId?: StringFilter<"Space"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: SpaceMemberListRelationFilter
    channels?: ChannelListRelationFilter
    otpInvites?: OtpInviteListRelationFilter
  }, "id">

  export type SpaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    adminRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: SpaceCountOrderByAggregateInput
    _max?: SpaceMaxOrderByAggregateInput
    _min?: SpaceMinOrderByAggregateInput
  }

  export type SpaceScalarWhereWithAggregatesInput = {
    AND?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    OR?: SpaceScalarWhereWithAggregatesInput[]
    NOT?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Space"> | string
    name?: StringWithAggregatesFilter<"Space"> | string
    description?: StringNullableWithAggregatesFilter<"Space"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Space"> | string | null
    objective?: StringNullableWithAggregatesFilter<"Space"> | string | null
    adminRole?: StringWithAggregatesFilter<"Space"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Space"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Space"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Space"> | string
  }

  export type SpaceMemberWhereInput = {
    AND?: SpaceMemberWhereInput | SpaceMemberWhereInput[]
    OR?: SpaceMemberWhereInput[]
    NOT?: SpaceMemberWhereInput | SpaceMemberWhereInput[]
    id?: StringFilter<"SpaceMember"> | string
    role?: EnumSpaceRoleFilter<"SpaceMember"> | $Enums.SpaceRole
    status?: EnumMemberStatusFilter<"SpaceMember"> | $Enums.MemberStatus
    joinedAt?: DateTimeFilter<"SpaceMember"> | Date | string
    updatedAt?: DateTimeFilter<"SpaceMember"> | Date | string
    blockedUntil?: DateTimeNullableFilter<"SpaceMember"> | Date | string | null
    spaceId?: StringFilter<"SpaceMember"> | string
    userId?: StringFilter<"SpaceMember"> | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    warnings?: WarningListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type SpaceMemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    blockedUntil?: SortOrderInput | SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
    space?: SpaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    warnings?: WarningOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type SpaceMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    spaceId_userId?: SpaceMemberSpaceIdUserIdCompoundUniqueInput
    AND?: SpaceMemberWhereInput | SpaceMemberWhereInput[]
    OR?: SpaceMemberWhereInput[]
    NOT?: SpaceMemberWhereInput | SpaceMemberWhereInput[]
    role?: EnumSpaceRoleFilter<"SpaceMember"> | $Enums.SpaceRole
    status?: EnumMemberStatusFilter<"SpaceMember"> | $Enums.MemberStatus
    joinedAt?: DateTimeFilter<"SpaceMember"> | Date | string
    updatedAt?: DateTimeFilter<"SpaceMember"> | Date | string
    blockedUntil?: DateTimeNullableFilter<"SpaceMember"> | Date | string | null
    spaceId?: StringFilter<"SpaceMember"> | string
    userId?: StringFilter<"SpaceMember"> | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    warnings?: WarningListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "spaceId_userId">

  export type SpaceMemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    blockedUntil?: SortOrderInput | SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
    _count?: SpaceMemberCountOrderByAggregateInput
    _max?: SpaceMemberMaxOrderByAggregateInput
    _min?: SpaceMemberMinOrderByAggregateInput
  }

  export type SpaceMemberScalarWhereWithAggregatesInput = {
    AND?: SpaceMemberScalarWhereWithAggregatesInput | SpaceMemberScalarWhereWithAggregatesInput[]
    OR?: SpaceMemberScalarWhereWithAggregatesInput[]
    NOT?: SpaceMemberScalarWhereWithAggregatesInput | SpaceMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpaceMember"> | string
    role?: EnumSpaceRoleWithAggregatesFilter<"SpaceMember"> | $Enums.SpaceRole
    status?: EnumMemberStatusWithAggregatesFilter<"SpaceMember"> | $Enums.MemberStatus
    joinedAt?: DateTimeWithAggregatesFilter<"SpaceMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpaceMember"> | Date | string
    blockedUntil?: DateTimeNullableWithAggregatesFilter<"SpaceMember"> | Date | string | null
    spaceId?: StringWithAggregatesFilter<"SpaceMember"> | string
    userId?: StringWithAggregatesFilter<"SpaceMember"> | string
  }

  export type WarningWhereInput = {
    AND?: WarningWhereInput | WarningWhereInput[]
    OR?: WarningWhereInput[]
    NOT?: WarningWhereInput | WarningWhereInput[]
    id?: StringFilter<"Warning"> | string
    reason?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
    memberId?: StringFilter<"Warning"> | string
    userId?: StringFilter<"Warning"> | string
    member?: XOR<SpaceMemberScalarRelationFilter, SpaceMemberWhereInput>
    issuedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WarningOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    userId?: SortOrder
    member?: SpaceMemberOrderByWithRelationInput
    issuedBy?: UserOrderByWithRelationInput
  }

  export type WarningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarningWhereInput | WarningWhereInput[]
    OR?: WarningWhereInput[]
    NOT?: WarningWhereInput | WarningWhereInput[]
    reason?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
    memberId?: StringFilter<"Warning"> | string
    userId?: StringFilter<"Warning"> | string
    member?: XOR<SpaceMemberScalarRelationFilter, SpaceMemberWhereInput>
    issuedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WarningOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    userId?: SortOrder
    _count?: WarningCountOrderByAggregateInput
    _max?: WarningMaxOrderByAggregateInput
    _min?: WarningMinOrderByAggregateInput
  }

  export type WarningScalarWhereWithAggregatesInput = {
    AND?: WarningScalarWhereWithAggregatesInput | WarningScalarWhereWithAggregatesInput[]
    OR?: WarningScalarWhereWithAggregatesInput[]
    NOT?: WarningScalarWhereWithAggregatesInput | WarningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warning"> | string
    reason?: StringWithAggregatesFilter<"Warning"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Warning"> | Date | string
    memberId?: StringWithAggregatesFilter<"Warning"> | string
    userId?: StringWithAggregatesFilter<"Warning"> | string
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    description?: StringNullableFilter<"Channel"> | string | null
    isDefault?: BoolFilter<"Channel"> | boolean
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    spaceId?: StringFilter<"Channel"> | string
    userId?: StringFilter<"Channel"> | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
    space?: SpaceOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    spaceId_name?: ChannelSpaceIdNameCompoundUniqueInput
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    name?: StringFilter<"Channel"> | string
    description?: StringNullableFilter<"Channel"> | string | null
    isDefault?: BoolFilter<"Channel"> | boolean
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    spaceId?: StringFilter<"Channel"> | string
    userId?: StringFilter<"Channel"> | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "spaceId_name">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    name?: StringWithAggregatesFilter<"Channel"> | string
    description?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    isDefault?: BoolWithAggregatesFilter<"Channel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    spaceId?: StringWithAggregatesFilter<"Channel"> | string
    userId?: StringWithAggregatesFilter<"Channel"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableFilter<"Message"> | string | null
    isPinned?: BoolFilter<"Message"> | boolean
    pinnedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    channelId?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    replyToId?: StringNullableFilter<"Message"> | string | null
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    replyTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    pinnedAt?: SortOrderInput | SortOrder
    editedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    channel?: ChannelOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    replyTo?: MessageOrderByWithRelationInput
    replies?: MessageOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableFilter<"Message"> | string | null
    isPinned?: BoolFilter<"Message"> | boolean
    pinnedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    channelId?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    replyToId?: StringNullableFilter<"Message"> | string | null
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    replyTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    pinnedAt?: SortOrderInput | SortOrder
    editedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    isPinned?: BoolWithAggregatesFilter<"Message"> | boolean
    pinnedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    editedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    channelId?: StringWithAggregatesFilter<"Message"> | string
    userId?: StringWithAggregatesFilter<"Message"> | string
    replyToId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type OtpInviteWhereInput = {
    AND?: OtpInviteWhereInput | OtpInviteWhereInput[]
    OR?: OtpInviteWhereInput[]
    NOT?: OtpInviteWhereInput | OtpInviteWhereInput[]
    id?: StringFilter<"OtpInvite"> | string
    email?: StringFilter<"OtpInvite"> | string
    code?: StringFilter<"OtpInvite"> | string
    expiresAt?: DateTimeFilter<"OtpInvite"> | Date | string
    usedAt?: DateTimeNullableFilter<"OtpInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpInvite"> | Date | string
    spaceId?: StringFilter<"OtpInvite"> | string
    userId?: StringFilter<"OtpInvite"> | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    sentBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OtpInviteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
    space?: SpaceOrderByWithRelationInput
    sentBy?: UserOrderByWithRelationInput
  }

  export type OtpInviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: OtpInviteWhereInput | OtpInviteWhereInput[]
    OR?: OtpInviteWhereInput[]
    NOT?: OtpInviteWhereInput | OtpInviteWhereInput[]
    email?: StringFilter<"OtpInvite"> | string
    expiresAt?: DateTimeFilter<"OtpInvite"> | Date | string
    usedAt?: DateTimeNullableFilter<"OtpInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpInvite"> | Date | string
    spaceId?: StringFilter<"OtpInvite"> | string
    userId?: StringFilter<"OtpInvite"> | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
    sentBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type OtpInviteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
    _count?: OtpInviteCountOrderByAggregateInput
    _max?: OtpInviteMaxOrderByAggregateInput
    _min?: OtpInviteMinOrderByAggregateInput
  }

  export type OtpInviteScalarWhereWithAggregatesInput = {
    AND?: OtpInviteScalarWhereWithAggregatesInput | OtpInviteScalarWhereWithAggregatesInput[]
    OR?: OtpInviteScalarWhereWithAggregatesInput[]
    NOT?: OtpInviteScalarWhereWithAggregatesInput | OtpInviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpInvite"> | string
    email?: StringWithAggregatesFilter<"OtpInvite"> | string
    code?: StringWithAggregatesFilter<"OtpInvite"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OtpInvite"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"OtpInvite"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OtpInvite"> | Date | string
    spaceId?: StringWithAggregatesFilter<"OtpInvite"> | string
    userId?: StringWithAggregatesFilter<"OtpInvite"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    memberId?: StringFilter<"Notification"> | string
    channelId?: StringNullableFilter<"Notification"> | string | null
    messageId?: StringNullableFilter<"Notification"> | string | null
    member?: XOR<SpaceMemberScalarRelationFilter, SpaceMemberWhereInput>
    channel?: XOR<ChannelNullableScalarRelationFilter, ChannelWhereInput> | null
    message?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    member?: SpaceMemberOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    memberId?: StringFilter<"Notification"> | string
    channelId?: StringNullableFilter<"Notification"> | string | null
    messageId?: StringNullableFilter<"Notification"> | string | null
    member?: XOR<SpaceMemberScalarRelationFilter, SpaceMemberWhereInput>
    channel?: XOR<ChannelNullableScalarRelationFilter, ChannelWhereInput> | null
    message?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    memberId?: StringWithAggregatesFilter<"Notification"> | string
    channelId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    messageId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type UserCreateInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordingCreateInput = {
    id?: string
    title: string
    audioUrl: string
    duration?: number | null
    transcription?: string | null
    summary?: string | null
    status?: $Enums.RecordingStatus
    exportedPdfUrl?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutRecordingsInput
  }

  export type RecordingUncheckedCreateInput = {
    id?: string
    title: string
    audioUrl: string
    duration?: number | null
    transcription?: string | null
    summary?: string | null
    status?: $Enums.RecordingStatus
    exportedPdfUrl?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RecordingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    transcription?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordingStatusFieldUpdateOperationsInput | $Enums.RecordingStatus
    exportedPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutRecordingsNestedInput
  }

  export type RecordingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    transcription?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordingStatusFieldUpdateOperationsInput | $Enums.RecordingStatus
    exportedPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordingCreateManyInput = {
    id?: string
    title: string
    audioUrl: string
    duration?: number | null
    transcription?: string | null
    summary?: string | null
    status?: $Enums.RecordingStatus
    exportedPdfUrl?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RecordingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    transcription?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordingStatusFieldUpdateOperationsInput | $Enums.RecordingStatus
    exportedPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    transcription?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordingStatusFieldUpdateOperationsInput | $Enums.RecordingStatus
    exportedPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    capacity?: number
    location?: string | null
    description?: string | null
    color?: string
    isActive?: boolean
    createdAt?: Date | string
    meetings?: MeetingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    capacity?: number
    location?: string | null
    description?: string | null
    color?: string
    isActive?: boolean
    createdAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    capacity?: number
    location?: string | null
    description?: string | null
    color?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutMeetingsInput
    createdBy: UserCreateNestedOneWithoutCreatedMeetingsInput
    attendees?: MeetingAttendeeCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: string
    userId: string
    attendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMeetingsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    attendees?: MeetingAttendeeUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendees?: MeetingAttendeeUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: string
    userId: string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingAttendeeCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutAttendeesInput
    user?: UserCreateNestedOneWithoutMeetingAttendeesInput
  }

  export type MeetingAttendeeUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    meetingId: string
    userId?: string | null
  }

  export type MeetingAttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutAttendeesNestedInput
    user?: UserUpdateOneWithoutMeetingAttendeesNestedInput
  }

  export type MeetingAttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeetingAttendeeCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    meetingId: string
    userId?: string | null
  }

  export type MeetingAttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingAttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpaceCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedSpacesInput
    members?: SpaceMemberCreateNestedManyWithoutSpaceInput
    channels?: ChannelCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: SpaceMemberUncheckedCreateNestedManyWithoutSpaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedSpacesNestedInput
    members?: SpaceMemberUpdateManyWithoutSpaceNestedInput
    channels?: ChannelUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: SpaceMemberUncheckedUpdateManyWithoutSpaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type SpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceMemberCreateInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    space: SpaceCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutSpaceMembershipsInput
    warnings?: WarningCreateNestedManyWithoutMemberInput
    notifications?: NotificationCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberUncheckedCreateInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    spaceId: string
    userId: string
    warnings?: WarningUncheckedCreateNestedManyWithoutMemberInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space?: SpaceUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutSpaceMembershipsNestedInput
    warnings?: WarningUpdateManyWithoutMemberNestedInput
    notifications?: NotificationUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    warnings?: WarningUncheckedUpdateManyWithoutMemberNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberCreateManyInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    spaceId: string
    userId: string
  }

  export type SpaceMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpaceMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WarningCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    member: SpaceMemberCreateNestedOneWithoutWarningsInput
    issuedBy: UserCreateNestedOneWithoutIssuedWarningsInput
  }

  export type WarningUncheckedCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    memberId: string
    userId: string
  }

  export type WarningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: SpaceMemberUpdateOneRequiredWithoutWarningsNestedInput
    issuedBy?: UserUpdateOneRequiredWithoutIssuedWarningsNestedInput
  }

  export type WarningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WarningCreateManyInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    memberId: string
    userId: string
  }

  export type WarningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelCreateInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    space: SpaceCreateNestedOneWithoutChannelsInput
    createdBy: UserCreateNestedOneWithoutCreatedChannelsInput
    messages?: MessageCreateNestedManyWithoutChannelInput
    notifications?: NotificationCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceId: string
    userId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutChannelsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedChannelsNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
    notifications?: NotificationUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceId: string
    userId: string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    notifications?: NotificationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    userId: string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    userId: string
    replyToId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtpInviteCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    space: SpaceCreateNestedOneWithoutOtpInvitesInput
    sentBy: UserCreateNestedOneWithoutSentOtpInvitesInput
  }

  export type OtpInviteUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    spaceId: string
    userId: string
  }

  export type OtpInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutOtpInvitesNestedInput
    sentBy?: UserUpdateOneRequiredWithoutSentOtpInvitesNestedInput
  }

  export type OtpInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OtpInviteCreateManyInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    spaceId: string
    userId: string
  }

  export type OtpInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    member: SpaceMemberCreateNestedOneWithoutNotificationsInput
    channel?: ChannelCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    memberId: string
    channelId?: string | null
    messageId?: string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: SpaceMemberUpdateOneRequiredWithoutNotificationsNestedInput
    channel?: ChannelUpdateOneWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    memberId: string
    channelId?: string | null
    messageId?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecordingListRelationFilter = {
    every?: RecordingWhereInput
    some?: RecordingWhereInput
    none?: RecordingWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type MeetingAttendeeListRelationFilter = {
    every?: MeetingAttendeeWhereInput
    some?: MeetingAttendeeWhereInput
    none?: MeetingAttendeeWhereInput
  }

  export type SpaceListRelationFilter = {
    every?: SpaceWhereInput
    some?: SpaceWhereInput
    none?: SpaceWhereInput
  }

  export type SpaceMemberListRelationFilter = {
    every?: SpaceMemberWhereInput
    some?: SpaceMemberWhereInput
    none?: SpaceMemberWhereInput
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type OtpInviteListRelationFilter = {
    every?: OtpInviteWhereInput
    some?: OtpInviteWhereInput
    none?: OtpInviteWhereInput
  }

  export type WarningListRelationFilter = {
    every?: WarningWhereInput
    some?: WarningWhereInput
    none?: WarningWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecordingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingAttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtpInviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRecordingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordingStatus | EnumRecordingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordingStatusFilter<$PrismaModel> | $Enums.RecordingStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecordingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    transcription?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    exportedPdfUrl?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecordingAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type RecordingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    transcription?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    exportedPdfUrl?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecordingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    transcription?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    exportedPdfUrl?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecordingSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRecordingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordingStatus | EnumRecordingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordingStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordingStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordingStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    description?: SortOrder
    color?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    description?: SortOrder
    color?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    description?: SortOrder
    color?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingScalarRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MeetingAttendeeMeetingIdUserIdCompoundUniqueInput = {
    meetingId: string
    userId: string
  }

  export type MeetingAttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isPresent?: SortOrder
    createdAt?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingAttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isPresent?: SortOrder
    createdAt?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingAttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isPresent?: SortOrder
    createdAt?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type SpaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    objective?: SortOrder
    adminRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type SpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    objective?: SortOrder
    adminRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type SpaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    objective?: SortOrder
    adminRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumSpaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceRole | EnumSpaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceRoleFilter<$PrismaModel> | $Enums.SpaceRole
  }

  export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SpaceScalarRelationFilter = {
    is?: SpaceWhereInput
    isNot?: SpaceWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceMemberSpaceIdUserIdCompoundUniqueInput = {
    spaceId: string
    userId: string
  }

  export type SpaceMemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    blockedUntil?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type SpaceMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    blockedUntil?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type SpaceMemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    blockedUntil?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type EnumSpaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceRole | EnumSpaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.SpaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpaceRoleFilter<$PrismaModel>
    _max?: NestedEnumSpaceRoleFilter<$PrismaModel>
  }

  export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SpaceMemberScalarRelationFilter = {
    is?: SpaceMemberWhereInput
    isNot?: SpaceMemberWhereInput
  }

  export type WarningCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    userId?: SortOrder
  }

  export type WarningMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    userId?: SortOrder
  }

  export type WarningMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    userId?: SortOrder
  }

  export type ChannelSpaceIdNameCompoundUniqueInput = {
    spaceId: string
    name: string
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isPinned?: SortOrder
    pinnedAt?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    replyToId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isPinned?: SortOrder
    pinnedAt?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    replyToId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isPinned?: SortOrder
    pinnedAt?: SortOrder
    editedAt?: SortOrder
    createdAt?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    replyToId?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type OtpInviteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type OtpInviteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type OtpInviteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
    spaceId?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type ChannelNullableScalarRelationFilter = {
    is?: ChannelWhereInput | null
    isNot?: ChannelWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    messageId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type RecordingCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RecordingCreateWithoutCreatedByInput, RecordingUncheckedCreateWithoutCreatedByInput> | RecordingCreateWithoutCreatedByInput[] | RecordingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecordingCreateOrConnectWithoutCreatedByInput | RecordingCreateOrConnectWithoutCreatedByInput[]
    createMany?: RecordingCreateManyCreatedByInputEnvelope
    connect?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MeetingCreateWithoutCreatedByInput, MeetingUncheckedCreateWithoutCreatedByInput> | MeetingCreateWithoutCreatedByInput[] | MeetingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatedByInput | MeetingCreateOrConnectWithoutCreatedByInput[]
    createMany?: MeetingCreateManyCreatedByInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingAttendeeCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingAttendeeCreateWithoutUserInput, MeetingAttendeeUncheckedCreateWithoutUserInput> | MeetingAttendeeCreateWithoutUserInput[] | MeetingAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutUserInput | MeetingAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: MeetingAttendeeCreateManyUserInputEnvelope
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
  }

  export type SpaceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput> | SpaceCreateWithoutOwnerInput[] | SpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutOwnerInput | SpaceCreateOrConnectWithoutOwnerInput[]
    createMany?: SpaceCreateManyOwnerInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type SpaceMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceMemberCreateWithoutUserInput, SpaceMemberUncheckedCreateWithoutUserInput> | SpaceMemberCreateWithoutUserInput[] | SpaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutUserInput | SpaceMemberCreateOrConnectWithoutUserInput[]
    createMany?: SpaceMemberCreateManyUserInputEnvelope
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
  }

  export type ChannelCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChannelCreateWithoutCreatedByInput, ChannelUncheckedCreateWithoutCreatedByInput> | ChannelCreateWithoutCreatedByInput[] | ChannelUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutCreatedByInput | ChannelCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChannelCreateManyCreatedByInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OtpInviteCreateNestedManyWithoutSentByInput = {
    create?: XOR<OtpInviteCreateWithoutSentByInput, OtpInviteUncheckedCreateWithoutSentByInput> | OtpInviteCreateWithoutSentByInput[] | OtpInviteUncheckedCreateWithoutSentByInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSentByInput | OtpInviteCreateOrConnectWithoutSentByInput[]
    createMany?: OtpInviteCreateManySentByInputEnvelope
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
  }

  export type WarningCreateNestedManyWithoutIssuedByInput = {
    create?: XOR<WarningCreateWithoutIssuedByInput, WarningUncheckedCreateWithoutIssuedByInput> | WarningCreateWithoutIssuedByInput[] | WarningUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutIssuedByInput | WarningCreateOrConnectWithoutIssuedByInput[]
    createMany?: WarningCreateManyIssuedByInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type RecordingUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RecordingCreateWithoutCreatedByInput, RecordingUncheckedCreateWithoutCreatedByInput> | RecordingCreateWithoutCreatedByInput[] | RecordingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecordingCreateOrConnectWithoutCreatedByInput | RecordingCreateOrConnectWithoutCreatedByInput[]
    createMany?: RecordingCreateManyCreatedByInputEnvelope
    connect?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MeetingCreateWithoutCreatedByInput, MeetingUncheckedCreateWithoutCreatedByInput> | MeetingCreateWithoutCreatedByInput[] | MeetingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatedByInput | MeetingCreateOrConnectWithoutCreatedByInput[]
    createMany?: MeetingCreateManyCreatedByInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingAttendeeCreateWithoutUserInput, MeetingAttendeeUncheckedCreateWithoutUserInput> | MeetingAttendeeCreateWithoutUserInput[] | MeetingAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutUserInput | MeetingAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: MeetingAttendeeCreateManyUserInputEnvelope
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
  }

  export type SpaceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput> | SpaceCreateWithoutOwnerInput[] | SpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutOwnerInput | SpaceCreateOrConnectWithoutOwnerInput[]
    createMany?: SpaceCreateManyOwnerInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type SpaceMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceMemberCreateWithoutUserInput, SpaceMemberUncheckedCreateWithoutUserInput> | SpaceMemberCreateWithoutUserInput[] | SpaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutUserInput | SpaceMemberCreateOrConnectWithoutUserInput[]
    createMany?: SpaceMemberCreateManyUserInputEnvelope
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChannelCreateWithoutCreatedByInput, ChannelUncheckedCreateWithoutCreatedByInput> | ChannelCreateWithoutCreatedByInput[] | ChannelUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutCreatedByInput | ChannelCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChannelCreateManyCreatedByInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OtpInviteUncheckedCreateNestedManyWithoutSentByInput = {
    create?: XOR<OtpInviteCreateWithoutSentByInput, OtpInviteUncheckedCreateWithoutSentByInput> | OtpInviteCreateWithoutSentByInput[] | OtpInviteUncheckedCreateWithoutSentByInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSentByInput | OtpInviteCreateOrConnectWithoutSentByInput[]
    createMany?: OtpInviteCreateManySentByInputEnvelope
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
  }

  export type WarningUncheckedCreateNestedManyWithoutIssuedByInput = {
    create?: XOR<WarningCreateWithoutIssuedByInput, WarningUncheckedCreateWithoutIssuedByInput> | WarningCreateWithoutIssuedByInput[] | WarningUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutIssuedByInput | WarningCreateOrConnectWithoutIssuedByInput[]
    createMany?: WarningCreateManyIssuedByInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecordingUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RecordingCreateWithoutCreatedByInput, RecordingUncheckedCreateWithoutCreatedByInput> | RecordingCreateWithoutCreatedByInput[] | RecordingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecordingCreateOrConnectWithoutCreatedByInput | RecordingCreateOrConnectWithoutCreatedByInput[]
    upsert?: RecordingUpsertWithWhereUniqueWithoutCreatedByInput | RecordingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RecordingCreateManyCreatedByInputEnvelope
    set?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    disconnect?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    delete?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    connect?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    update?: RecordingUpdateWithWhereUniqueWithoutCreatedByInput | RecordingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RecordingUpdateManyWithWhereWithoutCreatedByInput | RecordingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RecordingScalarWhereInput | RecordingScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MeetingCreateWithoutCreatedByInput, MeetingUncheckedCreateWithoutCreatedByInput> | MeetingCreateWithoutCreatedByInput[] | MeetingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatedByInput | MeetingCreateOrConnectWithoutCreatedByInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCreatedByInput | MeetingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MeetingCreateManyCreatedByInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCreatedByInput | MeetingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCreatedByInput | MeetingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingAttendeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingAttendeeCreateWithoutUserInput, MeetingAttendeeUncheckedCreateWithoutUserInput> | MeetingAttendeeCreateWithoutUserInput[] | MeetingAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutUserInput | MeetingAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: MeetingAttendeeUpsertWithWhereUniqueWithoutUserInput | MeetingAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingAttendeeCreateManyUserInputEnvelope
    set?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    disconnect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    delete?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    update?: MeetingAttendeeUpdateWithWhereUniqueWithoutUserInput | MeetingAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingAttendeeUpdateManyWithWhereWithoutUserInput | MeetingAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingAttendeeScalarWhereInput | MeetingAttendeeScalarWhereInput[]
  }

  export type SpaceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput> | SpaceCreateWithoutOwnerInput[] | SpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutOwnerInput | SpaceCreateOrConnectWithoutOwnerInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutOwnerInput | SpaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SpaceCreateManyOwnerInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutOwnerInput | SpaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutOwnerInput | SpaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type SpaceMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceMemberCreateWithoutUserInput, SpaceMemberUncheckedCreateWithoutUserInput> | SpaceMemberCreateWithoutUserInput[] | SpaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutUserInput | SpaceMemberCreateOrConnectWithoutUserInput[]
    upsert?: SpaceMemberUpsertWithWhereUniqueWithoutUserInput | SpaceMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceMemberCreateManyUserInputEnvelope
    set?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    disconnect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    delete?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    update?: SpaceMemberUpdateWithWhereUniqueWithoutUserInput | SpaceMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceMemberUpdateManyWithWhereWithoutUserInput | SpaceMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceMemberScalarWhereInput | SpaceMemberScalarWhereInput[]
  }

  export type ChannelUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChannelCreateWithoutCreatedByInput, ChannelUncheckedCreateWithoutCreatedByInput> | ChannelCreateWithoutCreatedByInput[] | ChannelUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutCreatedByInput | ChannelCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutCreatedByInput | ChannelUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChannelCreateManyCreatedByInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutCreatedByInput | ChannelUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutCreatedByInput | ChannelUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OtpInviteUpdateManyWithoutSentByNestedInput = {
    create?: XOR<OtpInviteCreateWithoutSentByInput, OtpInviteUncheckedCreateWithoutSentByInput> | OtpInviteCreateWithoutSentByInput[] | OtpInviteUncheckedCreateWithoutSentByInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSentByInput | OtpInviteCreateOrConnectWithoutSentByInput[]
    upsert?: OtpInviteUpsertWithWhereUniqueWithoutSentByInput | OtpInviteUpsertWithWhereUniqueWithoutSentByInput[]
    createMany?: OtpInviteCreateManySentByInputEnvelope
    set?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    disconnect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    delete?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    update?: OtpInviteUpdateWithWhereUniqueWithoutSentByInput | OtpInviteUpdateWithWhereUniqueWithoutSentByInput[]
    updateMany?: OtpInviteUpdateManyWithWhereWithoutSentByInput | OtpInviteUpdateManyWithWhereWithoutSentByInput[]
    deleteMany?: OtpInviteScalarWhereInput | OtpInviteScalarWhereInput[]
  }

  export type WarningUpdateManyWithoutIssuedByNestedInput = {
    create?: XOR<WarningCreateWithoutIssuedByInput, WarningUncheckedCreateWithoutIssuedByInput> | WarningCreateWithoutIssuedByInput[] | WarningUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutIssuedByInput | WarningCreateOrConnectWithoutIssuedByInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutIssuedByInput | WarningUpsertWithWhereUniqueWithoutIssuedByInput[]
    createMany?: WarningCreateManyIssuedByInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutIssuedByInput | WarningUpdateWithWhereUniqueWithoutIssuedByInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutIssuedByInput | WarningUpdateManyWithWhereWithoutIssuedByInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type RecordingUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RecordingCreateWithoutCreatedByInput, RecordingUncheckedCreateWithoutCreatedByInput> | RecordingCreateWithoutCreatedByInput[] | RecordingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RecordingCreateOrConnectWithoutCreatedByInput | RecordingCreateOrConnectWithoutCreatedByInput[]
    upsert?: RecordingUpsertWithWhereUniqueWithoutCreatedByInput | RecordingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RecordingCreateManyCreatedByInputEnvelope
    set?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    disconnect?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    delete?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    connect?: RecordingWhereUniqueInput | RecordingWhereUniqueInput[]
    update?: RecordingUpdateWithWhereUniqueWithoutCreatedByInput | RecordingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RecordingUpdateManyWithWhereWithoutCreatedByInput | RecordingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RecordingScalarWhereInput | RecordingScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MeetingCreateWithoutCreatedByInput, MeetingUncheckedCreateWithoutCreatedByInput> | MeetingCreateWithoutCreatedByInput[] | MeetingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatedByInput | MeetingCreateOrConnectWithoutCreatedByInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCreatedByInput | MeetingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MeetingCreateManyCreatedByInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCreatedByInput | MeetingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCreatedByInput | MeetingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingAttendeeCreateWithoutUserInput, MeetingAttendeeUncheckedCreateWithoutUserInput> | MeetingAttendeeCreateWithoutUserInput[] | MeetingAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutUserInput | MeetingAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: MeetingAttendeeUpsertWithWhereUniqueWithoutUserInput | MeetingAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingAttendeeCreateManyUserInputEnvelope
    set?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    disconnect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    delete?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    update?: MeetingAttendeeUpdateWithWhereUniqueWithoutUserInput | MeetingAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingAttendeeUpdateManyWithWhereWithoutUserInput | MeetingAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingAttendeeScalarWhereInput | MeetingAttendeeScalarWhereInput[]
  }

  export type SpaceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput> | SpaceCreateWithoutOwnerInput[] | SpaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutOwnerInput | SpaceCreateOrConnectWithoutOwnerInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutOwnerInput | SpaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SpaceCreateManyOwnerInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutOwnerInput | SpaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutOwnerInput | SpaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type SpaceMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceMemberCreateWithoutUserInput, SpaceMemberUncheckedCreateWithoutUserInput> | SpaceMemberCreateWithoutUserInput[] | SpaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutUserInput | SpaceMemberCreateOrConnectWithoutUserInput[]
    upsert?: SpaceMemberUpsertWithWhereUniqueWithoutUserInput | SpaceMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceMemberCreateManyUserInputEnvelope
    set?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    disconnect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    delete?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    update?: SpaceMemberUpdateWithWhereUniqueWithoutUserInput | SpaceMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceMemberUpdateManyWithWhereWithoutUserInput | SpaceMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceMemberScalarWhereInput | SpaceMemberScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChannelCreateWithoutCreatedByInput, ChannelUncheckedCreateWithoutCreatedByInput> | ChannelCreateWithoutCreatedByInput[] | ChannelUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutCreatedByInput | ChannelCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutCreatedByInput | ChannelUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChannelCreateManyCreatedByInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutCreatedByInput | ChannelUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutCreatedByInput | ChannelUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OtpInviteUncheckedUpdateManyWithoutSentByNestedInput = {
    create?: XOR<OtpInviteCreateWithoutSentByInput, OtpInviteUncheckedCreateWithoutSentByInput> | OtpInviteCreateWithoutSentByInput[] | OtpInviteUncheckedCreateWithoutSentByInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSentByInput | OtpInviteCreateOrConnectWithoutSentByInput[]
    upsert?: OtpInviteUpsertWithWhereUniqueWithoutSentByInput | OtpInviteUpsertWithWhereUniqueWithoutSentByInput[]
    createMany?: OtpInviteCreateManySentByInputEnvelope
    set?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    disconnect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    delete?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    update?: OtpInviteUpdateWithWhereUniqueWithoutSentByInput | OtpInviteUpdateWithWhereUniqueWithoutSentByInput[]
    updateMany?: OtpInviteUpdateManyWithWhereWithoutSentByInput | OtpInviteUpdateManyWithWhereWithoutSentByInput[]
    deleteMany?: OtpInviteScalarWhereInput | OtpInviteScalarWhereInput[]
  }

  export type WarningUncheckedUpdateManyWithoutIssuedByNestedInput = {
    create?: XOR<WarningCreateWithoutIssuedByInput, WarningUncheckedCreateWithoutIssuedByInput> | WarningCreateWithoutIssuedByInput[] | WarningUncheckedCreateWithoutIssuedByInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutIssuedByInput | WarningCreateOrConnectWithoutIssuedByInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutIssuedByInput | WarningUpsertWithWhereUniqueWithoutIssuedByInput[]
    createMany?: WarningCreateManyIssuedByInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutIssuedByInput | WarningUpdateWithWhereUniqueWithoutIssuedByInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutIssuedByInput | WarningUpdateManyWithWhereWithoutIssuedByInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecordingsInput = {
    create?: XOR<UserCreateWithoutRecordingsInput, UserUncheckedCreateWithoutRecordingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordingsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRecordingStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecordingStatus
  }

  export type UserUpdateOneRequiredWithoutRecordingsNestedInput = {
    create?: XOR<UserCreateWithoutRecordingsInput, UserUncheckedCreateWithoutRecordingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordingsInput
    upsert?: UserUpsertWithoutRecordingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordingsInput, UserUpdateWithoutRecordingsInput>, UserUncheckedUpdateWithoutRecordingsInput>
  }

  export type MeetingCreateNestedManyWithoutRoomInput = {
    create?: XOR<MeetingCreateWithoutRoomInput, MeetingUncheckedCreateWithoutRoomInput> | MeetingCreateWithoutRoomInput[] | MeetingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutRoomInput | MeetingCreateOrConnectWithoutRoomInput[]
    createMany?: MeetingCreateManyRoomInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MeetingCreateWithoutRoomInput, MeetingUncheckedCreateWithoutRoomInput> | MeetingCreateWithoutRoomInput[] | MeetingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutRoomInput | MeetingCreateOrConnectWithoutRoomInput[]
    createMany?: MeetingCreateManyRoomInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MeetingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MeetingCreateWithoutRoomInput, MeetingUncheckedCreateWithoutRoomInput> | MeetingCreateWithoutRoomInput[] | MeetingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutRoomInput | MeetingCreateOrConnectWithoutRoomInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutRoomInput | MeetingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MeetingCreateManyRoomInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutRoomInput | MeetingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutRoomInput | MeetingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MeetingCreateWithoutRoomInput, MeetingUncheckedCreateWithoutRoomInput> | MeetingCreateWithoutRoomInput[] | MeetingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutRoomInput | MeetingCreateOrConnectWithoutRoomInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutRoomInput | MeetingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MeetingCreateManyRoomInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutRoomInput | MeetingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutRoomInput | MeetingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<RoomCreateWithoutMeetingsInput, RoomUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMeetingsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedMeetingsInput = {
    create?: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMeetingsInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingAttendeeCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingAttendeeCreateWithoutMeetingInput, MeetingAttendeeUncheckedCreateWithoutMeetingInput> | MeetingAttendeeCreateWithoutMeetingInput[] | MeetingAttendeeUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutMeetingInput | MeetingAttendeeCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingAttendeeCreateManyMeetingInputEnvelope
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
  }

  export type MeetingAttendeeUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingAttendeeCreateWithoutMeetingInput, MeetingAttendeeUncheckedCreateWithoutMeetingInput> | MeetingAttendeeCreateWithoutMeetingInput[] | MeetingAttendeeUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutMeetingInput | MeetingAttendeeCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingAttendeeCreateManyMeetingInputEnvelope
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<RoomCreateWithoutMeetingsInput, RoomUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMeetingsInput
    upsert?: RoomUpsertWithoutMeetingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMeetingsInput, RoomUpdateWithoutMeetingsInput>, RoomUncheckedUpdateWithoutMeetingsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMeetingsInput
    upsert?: UserUpsertWithoutCreatedMeetingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedMeetingsInput, UserUpdateWithoutCreatedMeetingsInput>, UserUncheckedUpdateWithoutCreatedMeetingsInput>
  }

  export type MeetingAttendeeUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingAttendeeCreateWithoutMeetingInput, MeetingAttendeeUncheckedCreateWithoutMeetingInput> | MeetingAttendeeCreateWithoutMeetingInput[] | MeetingAttendeeUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutMeetingInput | MeetingAttendeeCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingAttendeeUpsertWithWhereUniqueWithoutMeetingInput | MeetingAttendeeUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingAttendeeCreateManyMeetingInputEnvelope
    set?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    disconnect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    delete?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    update?: MeetingAttendeeUpdateWithWhereUniqueWithoutMeetingInput | MeetingAttendeeUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingAttendeeUpdateManyWithWhereWithoutMeetingInput | MeetingAttendeeUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingAttendeeScalarWhereInput | MeetingAttendeeScalarWhereInput[]
  }

  export type MeetingAttendeeUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingAttendeeCreateWithoutMeetingInput, MeetingAttendeeUncheckedCreateWithoutMeetingInput> | MeetingAttendeeCreateWithoutMeetingInput[] | MeetingAttendeeUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingAttendeeCreateOrConnectWithoutMeetingInput | MeetingAttendeeCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingAttendeeUpsertWithWhereUniqueWithoutMeetingInput | MeetingAttendeeUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingAttendeeCreateManyMeetingInputEnvelope
    set?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    disconnect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    delete?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    connect?: MeetingAttendeeWhereUniqueInput | MeetingAttendeeWhereUniqueInput[]
    update?: MeetingAttendeeUpdateWithWhereUniqueWithoutMeetingInput | MeetingAttendeeUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingAttendeeUpdateManyWithWhereWithoutMeetingInput | MeetingAttendeeUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingAttendeeScalarWhereInput | MeetingAttendeeScalarWhereInput[]
  }

  export type MeetingCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<MeetingCreateWithoutAttendeesInput, MeetingUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutAttendeesInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMeetingAttendeesInput = {
    create?: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingAttendeesInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<MeetingCreateWithoutAttendeesInput, MeetingUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutAttendeesInput
    upsert?: MeetingUpsertWithoutAttendeesInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutAttendeesInput, MeetingUpdateWithoutAttendeesInput>, MeetingUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserUpdateOneWithoutMeetingAttendeesNestedInput = {
    create?: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingAttendeesInput
    upsert?: UserUpsertWithoutMeetingAttendeesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingAttendeesInput, UserUpdateWithoutMeetingAttendeesInput>, UserUncheckedUpdateWithoutMeetingAttendeesInput>
  }

  export type UserCreateNestedOneWithoutOwnedSpacesInput = {
    create?: XOR<UserCreateWithoutOwnedSpacesInput, UserUncheckedCreateWithoutOwnedSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedSpacesInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceMemberCreateNestedManyWithoutSpaceInput = {
    create?: XOR<SpaceMemberCreateWithoutSpaceInput, SpaceMemberUncheckedCreateWithoutSpaceInput> | SpaceMemberCreateWithoutSpaceInput[] | SpaceMemberUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutSpaceInput | SpaceMemberCreateOrConnectWithoutSpaceInput[]
    createMany?: SpaceMemberCreateManySpaceInputEnvelope
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
  }

  export type ChannelCreateNestedManyWithoutSpaceInput = {
    create?: XOR<ChannelCreateWithoutSpaceInput, ChannelUncheckedCreateWithoutSpaceInput> | ChannelCreateWithoutSpaceInput[] | ChannelUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutSpaceInput | ChannelCreateOrConnectWithoutSpaceInput[]
    createMany?: ChannelCreateManySpaceInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type OtpInviteCreateNestedManyWithoutSpaceInput = {
    create?: XOR<OtpInviteCreateWithoutSpaceInput, OtpInviteUncheckedCreateWithoutSpaceInput> | OtpInviteCreateWithoutSpaceInput[] | OtpInviteUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSpaceInput | OtpInviteCreateOrConnectWithoutSpaceInput[]
    createMany?: OtpInviteCreateManySpaceInputEnvelope
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
  }

  export type SpaceMemberUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<SpaceMemberCreateWithoutSpaceInput, SpaceMemberUncheckedCreateWithoutSpaceInput> | SpaceMemberCreateWithoutSpaceInput[] | SpaceMemberUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutSpaceInput | SpaceMemberCreateOrConnectWithoutSpaceInput[]
    createMany?: SpaceMemberCreateManySpaceInputEnvelope
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<ChannelCreateWithoutSpaceInput, ChannelUncheckedCreateWithoutSpaceInput> | ChannelCreateWithoutSpaceInput[] | ChannelUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutSpaceInput | ChannelCreateOrConnectWithoutSpaceInput[]
    createMany?: ChannelCreateManySpaceInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type OtpInviteUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<OtpInviteCreateWithoutSpaceInput, OtpInviteUncheckedCreateWithoutSpaceInput> | OtpInviteCreateWithoutSpaceInput[] | OtpInviteUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSpaceInput | OtpInviteCreateOrConnectWithoutSpaceInput[]
    createMany?: OtpInviteCreateManySpaceInputEnvelope
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedSpacesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedSpacesInput, UserUncheckedCreateWithoutOwnedSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedSpacesInput
    upsert?: UserUpsertWithoutOwnedSpacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedSpacesInput, UserUpdateWithoutOwnedSpacesInput>, UserUncheckedUpdateWithoutOwnedSpacesInput>
  }

  export type SpaceMemberUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<SpaceMemberCreateWithoutSpaceInput, SpaceMemberUncheckedCreateWithoutSpaceInput> | SpaceMemberCreateWithoutSpaceInput[] | SpaceMemberUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutSpaceInput | SpaceMemberCreateOrConnectWithoutSpaceInput[]
    upsert?: SpaceMemberUpsertWithWhereUniqueWithoutSpaceInput | SpaceMemberUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: SpaceMemberCreateManySpaceInputEnvelope
    set?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    disconnect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    delete?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    update?: SpaceMemberUpdateWithWhereUniqueWithoutSpaceInput | SpaceMemberUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: SpaceMemberUpdateManyWithWhereWithoutSpaceInput | SpaceMemberUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: SpaceMemberScalarWhereInput | SpaceMemberScalarWhereInput[]
  }

  export type ChannelUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<ChannelCreateWithoutSpaceInput, ChannelUncheckedCreateWithoutSpaceInput> | ChannelCreateWithoutSpaceInput[] | ChannelUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutSpaceInput | ChannelCreateOrConnectWithoutSpaceInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutSpaceInput | ChannelUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: ChannelCreateManySpaceInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutSpaceInput | ChannelUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutSpaceInput | ChannelUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type OtpInviteUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<OtpInviteCreateWithoutSpaceInput, OtpInviteUncheckedCreateWithoutSpaceInput> | OtpInviteCreateWithoutSpaceInput[] | OtpInviteUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSpaceInput | OtpInviteCreateOrConnectWithoutSpaceInput[]
    upsert?: OtpInviteUpsertWithWhereUniqueWithoutSpaceInput | OtpInviteUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: OtpInviteCreateManySpaceInputEnvelope
    set?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    disconnect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    delete?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    update?: OtpInviteUpdateWithWhereUniqueWithoutSpaceInput | OtpInviteUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: OtpInviteUpdateManyWithWhereWithoutSpaceInput | OtpInviteUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: OtpInviteScalarWhereInput | OtpInviteScalarWhereInput[]
  }

  export type SpaceMemberUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<SpaceMemberCreateWithoutSpaceInput, SpaceMemberUncheckedCreateWithoutSpaceInput> | SpaceMemberCreateWithoutSpaceInput[] | SpaceMemberUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutSpaceInput | SpaceMemberCreateOrConnectWithoutSpaceInput[]
    upsert?: SpaceMemberUpsertWithWhereUniqueWithoutSpaceInput | SpaceMemberUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: SpaceMemberCreateManySpaceInputEnvelope
    set?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    disconnect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    delete?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    connect?: SpaceMemberWhereUniqueInput | SpaceMemberWhereUniqueInput[]
    update?: SpaceMemberUpdateWithWhereUniqueWithoutSpaceInput | SpaceMemberUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: SpaceMemberUpdateManyWithWhereWithoutSpaceInput | SpaceMemberUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: SpaceMemberScalarWhereInput | SpaceMemberScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<ChannelCreateWithoutSpaceInput, ChannelUncheckedCreateWithoutSpaceInput> | ChannelCreateWithoutSpaceInput[] | ChannelUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutSpaceInput | ChannelCreateOrConnectWithoutSpaceInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutSpaceInput | ChannelUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: ChannelCreateManySpaceInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutSpaceInput | ChannelUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutSpaceInput | ChannelUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type OtpInviteUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<OtpInviteCreateWithoutSpaceInput, OtpInviteUncheckedCreateWithoutSpaceInput> | OtpInviteCreateWithoutSpaceInput[] | OtpInviteUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: OtpInviteCreateOrConnectWithoutSpaceInput | OtpInviteCreateOrConnectWithoutSpaceInput[]
    upsert?: OtpInviteUpsertWithWhereUniqueWithoutSpaceInput | OtpInviteUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: OtpInviteCreateManySpaceInputEnvelope
    set?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    disconnect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    delete?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    connect?: OtpInviteWhereUniqueInput | OtpInviteWhereUniqueInput[]
    update?: OtpInviteUpdateWithWhereUniqueWithoutSpaceInput | OtpInviteUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: OtpInviteUpdateManyWithWhereWithoutSpaceInput | OtpInviteUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: OtpInviteScalarWhereInput | OtpInviteScalarWhereInput[]
  }

  export type SpaceCreateNestedOneWithoutMembersInput = {
    create?: XOR<SpaceCreateWithoutMembersInput, SpaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutMembersInput
    connect?: SpaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSpaceMembershipsInput = {
    create?: XOR<UserCreateWithoutSpaceMembershipsInput, UserUncheckedCreateWithoutSpaceMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpaceMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type WarningCreateNestedManyWithoutMemberInput = {
    create?: XOR<WarningCreateWithoutMemberInput, WarningUncheckedCreateWithoutMemberInput> | WarningCreateWithoutMemberInput[] | WarningUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutMemberInput | WarningCreateOrConnectWithoutMemberInput[]
    createMany?: WarningCreateManyMemberInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutMemberInput = {
    create?: XOR<NotificationCreateWithoutMemberInput, NotificationUncheckedCreateWithoutMemberInput> | NotificationCreateWithoutMemberInput[] | NotificationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMemberInput | NotificationCreateOrConnectWithoutMemberInput[]
    createMany?: NotificationCreateManyMemberInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type WarningUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<WarningCreateWithoutMemberInput, WarningUncheckedCreateWithoutMemberInput> | WarningCreateWithoutMemberInput[] | WarningUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutMemberInput | WarningCreateOrConnectWithoutMemberInput[]
    createMany?: WarningCreateManyMemberInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<NotificationCreateWithoutMemberInput, NotificationUncheckedCreateWithoutMemberInput> | NotificationCreateWithoutMemberInput[] | NotificationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMemberInput | NotificationCreateOrConnectWithoutMemberInput[]
    createMany?: NotificationCreateManyMemberInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumSpaceRoleFieldUpdateOperationsInput = {
    set?: $Enums.SpaceRole
  }

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SpaceUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<SpaceCreateWithoutMembersInput, SpaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutMembersInput
    upsert?: SpaceUpsertWithoutMembersInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutMembersInput, SpaceUpdateWithoutMembersInput>, SpaceUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutSpaceMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutSpaceMembershipsInput, UserUncheckedCreateWithoutSpaceMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpaceMembershipsInput
    upsert?: UserUpsertWithoutSpaceMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpaceMembershipsInput, UserUpdateWithoutSpaceMembershipsInput>, UserUncheckedUpdateWithoutSpaceMembershipsInput>
  }

  export type WarningUpdateManyWithoutMemberNestedInput = {
    create?: XOR<WarningCreateWithoutMemberInput, WarningUncheckedCreateWithoutMemberInput> | WarningCreateWithoutMemberInput[] | WarningUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutMemberInput | WarningCreateOrConnectWithoutMemberInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutMemberInput | WarningUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: WarningCreateManyMemberInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutMemberInput | WarningUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutMemberInput | WarningUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutMemberNestedInput = {
    create?: XOR<NotificationCreateWithoutMemberInput, NotificationUncheckedCreateWithoutMemberInput> | NotificationCreateWithoutMemberInput[] | NotificationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMemberInput | NotificationCreateOrConnectWithoutMemberInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutMemberInput | NotificationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: NotificationCreateManyMemberInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutMemberInput | NotificationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutMemberInput | NotificationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type WarningUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<WarningCreateWithoutMemberInput, WarningUncheckedCreateWithoutMemberInput> | WarningCreateWithoutMemberInput[] | WarningUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutMemberInput | WarningCreateOrConnectWithoutMemberInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutMemberInput | WarningUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: WarningCreateManyMemberInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutMemberInput | WarningUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutMemberInput | WarningUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<NotificationCreateWithoutMemberInput, NotificationUncheckedCreateWithoutMemberInput> | NotificationCreateWithoutMemberInput[] | NotificationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMemberInput | NotificationCreateOrConnectWithoutMemberInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutMemberInput | NotificationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: NotificationCreateManyMemberInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutMemberInput | NotificationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutMemberInput | NotificationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SpaceMemberCreateNestedOneWithoutWarningsInput = {
    create?: XOR<SpaceMemberCreateWithoutWarningsInput, SpaceMemberUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutWarningsInput
    connect?: SpaceMemberWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIssuedWarningsInput = {
    create?: XOR<UserCreateWithoutIssuedWarningsInput, UserUncheckedCreateWithoutIssuedWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedWarningsInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceMemberUpdateOneRequiredWithoutWarningsNestedInput = {
    create?: XOR<SpaceMemberCreateWithoutWarningsInput, SpaceMemberUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutWarningsInput
    upsert?: SpaceMemberUpsertWithoutWarningsInput
    connect?: SpaceMemberWhereUniqueInput
    update?: XOR<XOR<SpaceMemberUpdateToOneWithWhereWithoutWarningsInput, SpaceMemberUpdateWithoutWarningsInput>, SpaceMemberUncheckedUpdateWithoutWarningsInput>
  }

  export type UserUpdateOneRequiredWithoutIssuedWarningsNestedInput = {
    create?: XOR<UserCreateWithoutIssuedWarningsInput, UserUncheckedCreateWithoutIssuedWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedWarningsInput
    upsert?: UserUpsertWithoutIssuedWarningsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIssuedWarningsInput, UserUpdateWithoutIssuedWarningsInput>, UserUncheckedUpdateWithoutIssuedWarningsInput>
  }

  export type SpaceCreateNestedOneWithoutChannelsInput = {
    create?: XOR<SpaceCreateWithoutChannelsInput, SpaceUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChannelsInput
    connect?: SpaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedChannelsInput = {
    create?: XOR<UserCreateWithoutCreatedChannelsInput, UserUncheckedCreateWithoutCreatedChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChannelInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutChannelInput = {
    create?: XOR<NotificationCreateWithoutChannelInput, NotificationUncheckedCreateWithoutChannelInput> | NotificationCreateWithoutChannelInput[] | NotificationUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutChannelInput | NotificationCreateOrConnectWithoutChannelInput[]
    createMany?: NotificationCreateManyChannelInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<NotificationCreateWithoutChannelInput, NotificationUncheckedCreateWithoutChannelInput> | NotificationCreateWithoutChannelInput[] | NotificationUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutChannelInput | NotificationCreateOrConnectWithoutChannelInput[]
    createMany?: NotificationCreateManyChannelInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SpaceUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<SpaceCreateWithoutChannelsInput, SpaceUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChannelsInput
    upsert?: SpaceUpsertWithoutChannelsInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutChannelsInput, SpaceUpdateWithoutChannelsInput>, SpaceUncheckedUpdateWithoutChannelsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedChannelsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedChannelsInput, UserUncheckedCreateWithoutCreatedChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChannelsInput
    upsert?: UserUpsertWithoutCreatedChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedChannelsInput, UserUpdateWithoutCreatedChannelsInput>, UserUncheckedUpdateWithoutCreatedChannelsInput>
  }

  export type MessageUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput | MessageUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChannelInput | MessageUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChannelInput | MessageUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutChannelNestedInput = {
    create?: XOR<NotificationCreateWithoutChannelInput, NotificationUncheckedCreateWithoutChannelInput> | NotificationCreateWithoutChannelInput[] | NotificationUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutChannelInput | NotificationCreateOrConnectWithoutChannelInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutChannelInput | NotificationUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: NotificationCreateManyChannelInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutChannelInput | NotificationUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutChannelInput | NotificationUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput | MessageUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChannelInput | MessageUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChannelInput | MessageUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<NotificationCreateWithoutChannelInput, NotificationUncheckedCreateWithoutChannelInput> | NotificationCreateWithoutChannelInput[] | NotificationUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutChannelInput | NotificationCreateOrConnectWithoutChannelInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutChannelInput | NotificationUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: NotificationCreateManyChannelInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutChannelInput | NotificationUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutChannelInput | NotificationUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ChannelCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput
    connect?: ChannelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutReplyToInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutMessageInput = {
    create?: XOR<NotificationCreateWithoutMessageInput, NotificationUncheckedCreateWithoutMessageInput> | NotificationCreateWithoutMessageInput[] | NotificationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMessageInput | NotificationCreateOrConnectWithoutMessageInput[]
    createMany?: NotificationCreateManyMessageInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<NotificationCreateWithoutMessageInput, NotificationUncheckedCreateWithoutMessageInput> | NotificationCreateWithoutMessageInput[] | NotificationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMessageInput | NotificationCreateOrConnectWithoutMessageInput[]
    createMany?: NotificationCreateManyMessageInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ChannelUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput
    upsert?: ChannelUpsertWithoutMessagesInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutMessagesInput, ChannelUpdateWithoutMessagesInput>, ChannelUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    upsert?: MessageUpsertWithoutRepliesInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutRepliesInput, MessageUpdateWithoutRepliesInput>, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReplyToInput | MessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReplyToInput | MessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReplyToInput | MessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutMessageNestedInput = {
    create?: XOR<NotificationCreateWithoutMessageInput, NotificationUncheckedCreateWithoutMessageInput> | NotificationCreateWithoutMessageInput[] | NotificationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMessageInput | NotificationCreateOrConnectWithoutMessageInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutMessageInput | NotificationUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: NotificationCreateManyMessageInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutMessageInput | NotificationUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutMessageInput | NotificationUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReplyToInput | MessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReplyToInput | MessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReplyToInput | MessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<NotificationCreateWithoutMessageInput, NotificationUncheckedCreateWithoutMessageInput> | NotificationCreateWithoutMessageInput[] | NotificationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutMessageInput | NotificationCreateOrConnectWithoutMessageInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutMessageInput | NotificationUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: NotificationCreateManyMessageInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutMessageInput | NotificationUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutMessageInput | NotificationUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SpaceCreateNestedOneWithoutOtpInvitesInput = {
    create?: XOR<SpaceCreateWithoutOtpInvitesInput, SpaceUncheckedCreateWithoutOtpInvitesInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutOtpInvitesInput
    connect?: SpaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentOtpInvitesInput = {
    create?: XOR<UserCreateWithoutSentOtpInvitesInput, UserUncheckedCreateWithoutSentOtpInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentOtpInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceUpdateOneRequiredWithoutOtpInvitesNestedInput = {
    create?: XOR<SpaceCreateWithoutOtpInvitesInput, SpaceUncheckedCreateWithoutOtpInvitesInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutOtpInvitesInput
    upsert?: SpaceUpsertWithoutOtpInvitesInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutOtpInvitesInput, SpaceUpdateWithoutOtpInvitesInput>, SpaceUncheckedUpdateWithoutOtpInvitesInput>
  }

  export type UserUpdateOneRequiredWithoutSentOtpInvitesNestedInput = {
    create?: XOR<UserCreateWithoutSentOtpInvitesInput, UserUncheckedCreateWithoutSentOtpInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentOtpInvitesInput
    upsert?: UserUpsertWithoutSentOtpInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentOtpInvitesInput, UserUpdateWithoutSentOtpInvitesInput>, UserUncheckedUpdateWithoutSentOtpInvitesInput>
  }

  export type SpaceMemberCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<SpaceMemberCreateWithoutNotificationsInput, SpaceMemberUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutNotificationsInput
    connect?: SpaceMemberWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ChannelCreateWithoutNotificationsInput, ChannelUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutNotificationsInput
    connect?: ChannelWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<MessageCreateWithoutNotificationsInput, MessageUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutNotificationsInput
    connect?: MessageWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type SpaceMemberUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<SpaceMemberCreateWithoutNotificationsInput, SpaceMemberUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: SpaceMemberCreateOrConnectWithoutNotificationsInput
    upsert?: SpaceMemberUpsertWithoutNotificationsInput
    connect?: SpaceMemberWhereUniqueInput
    update?: XOR<XOR<SpaceMemberUpdateToOneWithWhereWithoutNotificationsInput, SpaceMemberUpdateWithoutNotificationsInput>, SpaceMemberUncheckedUpdateWithoutNotificationsInput>
  }

  export type ChannelUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ChannelCreateWithoutNotificationsInput, ChannelUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutNotificationsInput
    upsert?: ChannelUpsertWithoutNotificationsInput
    disconnect?: ChannelWhereInput | boolean
    delete?: ChannelWhereInput | boolean
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutNotificationsInput, ChannelUpdateWithoutNotificationsInput>, ChannelUncheckedUpdateWithoutNotificationsInput>
  }

  export type MessageUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<MessageCreateWithoutNotificationsInput, MessageUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutNotificationsInput
    upsert?: MessageUpsertWithoutNotificationsInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutNotificationsInput, MessageUpdateWithoutNotificationsInput>, MessageUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRecordingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordingStatus | EnumRecordingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordingStatusFilter<$PrismaModel> | $Enums.RecordingStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRecordingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordingStatus | EnumRecordingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordingStatus[] | ListEnumRecordingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordingStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordingStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordingStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSpaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceRole | EnumSpaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceRoleFilter<$PrismaModel> | $Enums.SpaceRole
  }

  export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSpaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpaceRole | EnumSpaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpaceRole[] | ListEnumSpaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSpaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.SpaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpaceRoleFilter<$PrismaModel>
    _max?: NestedEnumSpaceRoleFilter<$PrismaModel>
  }

  export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type RecordingCreateWithoutCreatedByInput = {
    id?: string
    title: string
    audioUrl: string
    duration?: number | null
    transcription?: string | null
    summary?: string | null
    status?: $Enums.RecordingStatus
    exportedPdfUrl?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordingUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    audioUrl: string
    duration?: number | null
    transcription?: string | null
    summary?: string | null
    status?: $Enums.RecordingStatus
    exportedPdfUrl?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordingCreateOrConnectWithoutCreatedByInput = {
    where: RecordingWhereUniqueInput
    create: XOR<RecordingCreateWithoutCreatedByInput, RecordingUncheckedCreateWithoutCreatedByInput>
  }

  export type RecordingCreateManyCreatedByInputEnvelope = {
    data: RecordingCreateManyCreatedByInput | RecordingCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutMeetingsInput
    attendees?: MeetingAttendeeCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: string
    attendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutCreatedByInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutCreatedByInput, MeetingUncheckedCreateWithoutCreatedByInput>
  }

  export type MeetingCreateManyCreatedByInputEnvelope = {
    data: MeetingCreateManyCreatedByInput | MeetingCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MeetingAttendeeCreateWithoutUserInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutAttendeesInput
  }

  export type MeetingAttendeeUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    meetingId: string
  }

  export type MeetingAttendeeCreateOrConnectWithoutUserInput = {
    where: MeetingAttendeeWhereUniqueInput
    create: XOR<MeetingAttendeeCreateWithoutUserInput, MeetingAttendeeUncheckedCreateWithoutUserInput>
  }

  export type MeetingAttendeeCreateManyUserInputEnvelope = {
    data: MeetingAttendeeCreateManyUserInput | MeetingAttendeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpaceCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: SpaceMemberCreateNestedManyWithoutSpaceInput
    channels?: ChannelCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: SpaceMemberUncheckedCreateNestedManyWithoutSpaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutOwnerInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput>
  }

  export type SpaceCreateManyOwnerInputEnvelope = {
    data: SpaceCreateManyOwnerInput | SpaceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SpaceMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    space: SpaceCreateNestedOneWithoutMembersInput
    warnings?: WarningCreateNestedManyWithoutMemberInput
    notifications?: NotificationCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberUncheckedCreateWithoutUserInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    spaceId: string
    warnings?: WarningUncheckedCreateNestedManyWithoutMemberInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberCreateOrConnectWithoutUserInput = {
    where: SpaceMemberWhereUniqueInput
    create: XOR<SpaceMemberCreateWithoutUserInput, SpaceMemberUncheckedCreateWithoutUserInput>
  }

  export type SpaceMemberCreateManyUserInputEnvelope = {
    data: SpaceMemberCreateManyUserInput | SpaceMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChannelCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    space: SpaceCreateNestedOneWithoutChannelsInput
    messages?: MessageCreateNestedManyWithoutChannelInput
    notifications?: NotificationCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutCreatedByInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutCreatedByInput, ChannelUncheckedCreateWithoutCreatedByInput>
  }

  export type ChannelCreateManyCreatedByInputEnvelope = {
    data: ChannelCreateManyCreatedByInput | ChannelCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    notifications?: NotificationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type OtpInviteCreateWithoutSentByInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    space: SpaceCreateNestedOneWithoutOtpInvitesInput
  }

  export type OtpInviteUncheckedCreateWithoutSentByInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    spaceId: string
  }

  export type OtpInviteCreateOrConnectWithoutSentByInput = {
    where: OtpInviteWhereUniqueInput
    create: XOR<OtpInviteCreateWithoutSentByInput, OtpInviteUncheckedCreateWithoutSentByInput>
  }

  export type OtpInviteCreateManySentByInputEnvelope = {
    data: OtpInviteCreateManySentByInput | OtpInviteCreateManySentByInput[]
    skipDuplicates?: boolean
  }

  export type WarningCreateWithoutIssuedByInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    member: SpaceMemberCreateNestedOneWithoutWarningsInput
  }

  export type WarningUncheckedCreateWithoutIssuedByInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    memberId: string
  }

  export type WarningCreateOrConnectWithoutIssuedByInput = {
    where: WarningWhereUniqueInput
    create: XOR<WarningCreateWithoutIssuedByInput, WarningUncheckedCreateWithoutIssuedByInput>
  }

  export type WarningCreateManyIssuedByInputEnvelope = {
    data: WarningCreateManyIssuedByInput | WarningCreateManyIssuedByInput[]
    skipDuplicates?: boolean
  }

  export type RecordingUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RecordingWhereUniqueInput
    update: XOR<RecordingUpdateWithoutCreatedByInput, RecordingUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RecordingCreateWithoutCreatedByInput, RecordingUncheckedCreateWithoutCreatedByInput>
  }

  export type RecordingUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RecordingWhereUniqueInput
    data: XOR<RecordingUpdateWithoutCreatedByInput, RecordingUncheckedUpdateWithoutCreatedByInput>
  }

  export type RecordingUpdateManyWithWhereWithoutCreatedByInput = {
    where: RecordingScalarWhereInput
    data: XOR<RecordingUpdateManyMutationInput, RecordingUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RecordingScalarWhereInput = {
    AND?: RecordingScalarWhereInput | RecordingScalarWhereInput[]
    OR?: RecordingScalarWhereInput[]
    NOT?: RecordingScalarWhereInput | RecordingScalarWhereInput[]
    id?: StringFilter<"Recording"> | string
    title?: StringFilter<"Recording"> | string
    audioUrl?: StringFilter<"Recording"> | string
    duration?: IntNullableFilter<"Recording"> | number | null
    transcription?: StringNullableFilter<"Recording"> | string | null
    summary?: StringNullableFilter<"Recording"> | string | null
    status?: EnumRecordingStatusFilter<"Recording"> | $Enums.RecordingStatus
    exportedPdfUrl?: StringNullableFilter<"Recording"> | string | null
    language?: StringFilter<"Recording"> | string
    createdAt?: DateTimeFilter<"Recording"> | Date | string
    updatedAt?: DateTimeFilter<"Recording"> | Date | string
    userId?: StringFilter<"Recording"> | string
  }

  export type MeetingUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutCreatedByInput, MeetingUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MeetingCreateWithoutCreatedByInput, MeetingUncheckedCreateWithoutCreatedByInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutCreatedByInput, MeetingUncheckedUpdateWithoutCreatedByInput>
  }

  export type MeetingUpdateManyWithWhereWithoutCreatedByInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    color?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    roomId?: StringFilter<"Meeting"> | string
    userId?: StringFilter<"Meeting"> | string
  }

  export type MeetingAttendeeUpsertWithWhereUniqueWithoutUserInput = {
    where: MeetingAttendeeWhereUniqueInput
    update: XOR<MeetingAttendeeUpdateWithoutUserInput, MeetingAttendeeUncheckedUpdateWithoutUserInput>
    create: XOR<MeetingAttendeeCreateWithoutUserInput, MeetingAttendeeUncheckedCreateWithoutUserInput>
  }

  export type MeetingAttendeeUpdateWithWhereUniqueWithoutUserInput = {
    where: MeetingAttendeeWhereUniqueInput
    data: XOR<MeetingAttendeeUpdateWithoutUserInput, MeetingAttendeeUncheckedUpdateWithoutUserInput>
  }

  export type MeetingAttendeeUpdateManyWithWhereWithoutUserInput = {
    where: MeetingAttendeeScalarWhereInput
    data: XOR<MeetingAttendeeUpdateManyMutationInput, MeetingAttendeeUncheckedUpdateManyWithoutUserInput>
  }

  export type MeetingAttendeeScalarWhereInput = {
    AND?: MeetingAttendeeScalarWhereInput | MeetingAttendeeScalarWhereInput[]
    OR?: MeetingAttendeeScalarWhereInput[]
    NOT?: MeetingAttendeeScalarWhereInput | MeetingAttendeeScalarWhereInput[]
    id?: StringFilter<"MeetingAttendee"> | string
    name?: StringNullableFilter<"MeetingAttendee"> | string | null
    email?: StringNullableFilter<"MeetingAttendee"> | string | null
    isPresent?: BoolFilter<"MeetingAttendee"> | boolean
    createdAt?: DateTimeFilter<"MeetingAttendee"> | Date | string
    meetingId?: StringFilter<"MeetingAttendee"> | string
    userId?: StringNullableFilter<"MeetingAttendee"> | string | null
  }

  export type SpaceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutOwnerInput, SpaceUncheckedUpdateWithoutOwnerInput>
    create: XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutOwnerInput, SpaceUncheckedUpdateWithoutOwnerInput>
  }

  export type SpaceUpdateManyWithWhereWithoutOwnerInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SpaceScalarWhereInput = {
    AND?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    OR?: SpaceScalarWhereInput[]
    NOT?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    id?: StringFilter<"Space"> | string
    name?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    icon?: StringNullableFilter<"Space"> | string | null
    objective?: StringNullableFilter<"Space"> | string | null
    adminRole?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    ownerId?: StringFilter<"Space"> | string
  }

  export type SpaceMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: SpaceMemberWhereUniqueInput
    update: XOR<SpaceMemberUpdateWithoutUserInput, SpaceMemberUncheckedUpdateWithoutUserInput>
    create: XOR<SpaceMemberCreateWithoutUserInput, SpaceMemberUncheckedCreateWithoutUserInput>
  }

  export type SpaceMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: SpaceMemberWhereUniqueInput
    data: XOR<SpaceMemberUpdateWithoutUserInput, SpaceMemberUncheckedUpdateWithoutUserInput>
  }

  export type SpaceMemberUpdateManyWithWhereWithoutUserInput = {
    where: SpaceMemberScalarWhereInput
    data: XOR<SpaceMemberUpdateManyMutationInput, SpaceMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type SpaceMemberScalarWhereInput = {
    AND?: SpaceMemberScalarWhereInput | SpaceMemberScalarWhereInput[]
    OR?: SpaceMemberScalarWhereInput[]
    NOT?: SpaceMemberScalarWhereInput | SpaceMemberScalarWhereInput[]
    id?: StringFilter<"SpaceMember"> | string
    role?: EnumSpaceRoleFilter<"SpaceMember"> | $Enums.SpaceRole
    status?: EnumMemberStatusFilter<"SpaceMember"> | $Enums.MemberStatus
    joinedAt?: DateTimeFilter<"SpaceMember"> | Date | string
    updatedAt?: DateTimeFilter<"SpaceMember"> | Date | string
    blockedUntil?: DateTimeNullableFilter<"SpaceMember"> | Date | string | null
    spaceId?: StringFilter<"SpaceMember"> | string
    userId?: StringFilter<"SpaceMember"> | string
  }

  export type ChannelUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutCreatedByInput, ChannelUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ChannelCreateWithoutCreatedByInput, ChannelUncheckedCreateWithoutCreatedByInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutCreatedByInput, ChannelUncheckedUpdateWithoutCreatedByInput>
  }

  export type ChannelUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    OR?: ChannelScalarWhereInput[]
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    description?: StringNullableFilter<"Channel"> | string | null
    isDefault?: BoolFilter<"Channel"> | boolean
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    spaceId?: StringFilter<"Channel"> | string
    userId?: StringFilter<"Channel"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableFilter<"Message"> | string | null
    isPinned?: BoolFilter<"Message"> | boolean
    pinnedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    channelId?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    replyToId?: StringNullableFilter<"Message"> | string | null
  }

  export type OtpInviteUpsertWithWhereUniqueWithoutSentByInput = {
    where: OtpInviteWhereUniqueInput
    update: XOR<OtpInviteUpdateWithoutSentByInput, OtpInviteUncheckedUpdateWithoutSentByInput>
    create: XOR<OtpInviteCreateWithoutSentByInput, OtpInviteUncheckedCreateWithoutSentByInput>
  }

  export type OtpInviteUpdateWithWhereUniqueWithoutSentByInput = {
    where: OtpInviteWhereUniqueInput
    data: XOR<OtpInviteUpdateWithoutSentByInput, OtpInviteUncheckedUpdateWithoutSentByInput>
  }

  export type OtpInviteUpdateManyWithWhereWithoutSentByInput = {
    where: OtpInviteScalarWhereInput
    data: XOR<OtpInviteUpdateManyMutationInput, OtpInviteUncheckedUpdateManyWithoutSentByInput>
  }

  export type OtpInviteScalarWhereInput = {
    AND?: OtpInviteScalarWhereInput | OtpInviteScalarWhereInput[]
    OR?: OtpInviteScalarWhereInput[]
    NOT?: OtpInviteScalarWhereInput | OtpInviteScalarWhereInput[]
    id?: StringFilter<"OtpInvite"> | string
    email?: StringFilter<"OtpInvite"> | string
    code?: StringFilter<"OtpInvite"> | string
    expiresAt?: DateTimeFilter<"OtpInvite"> | Date | string
    usedAt?: DateTimeNullableFilter<"OtpInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"OtpInvite"> | Date | string
    spaceId?: StringFilter<"OtpInvite"> | string
    userId?: StringFilter<"OtpInvite"> | string
  }

  export type WarningUpsertWithWhereUniqueWithoutIssuedByInput = {
    where: WarningWhereUniqueInput
    update: XOR<WarningUpdateWithoutIssuedByInput, WarningUncheckedUpdateWithoutIssuedByInput>
    create: XOR<WarningCreateWithoutIssuedByInput, WarningUncheckedCreateWithoutIssuedByInput>
  }

  export type WarningUpdateWithWhereUniqueWithoutIssuedByInput = {
    where: WarningWhereUniqueInput
    data: XOR<WarningUpdateWithoutIssuedByInput, WarningUncheckedUpdateWithoutIssuedByInput>
  }

  export type WarningUpdateManyWithWhereWithoutIssuedByInput = {
    where: WarningScalarWhereInput
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyWithoutIssuedByInput>
  }

  export type WarningScalarWhereInput = {
    AND?: WarningScalarWhereInput | WarningScalarWhereInput[]
    OR?: WarningScalarWhereInput[]
    NOT?: WarningScalarWhereInput | WarningScalarWhereInput[]
    id?: StringFilter<"Warning"> | string
    reason?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
    memberId?: StringFilter<"Warning"> | string
    userId?: StringFilter<"Warning"> | string
  }

  export type UserCreateWithoutRecordingsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutRecordingsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutRecordingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordingsInput, UserUncheckedCreateWithoutRecordingsInput>
  }

  export type UserUpsertWithoutRecordingsInput = {
    update: XOR<UserUpdateWithoutRecordingsInput, UserUncheckedUpdateWithoutRecordingsInput>
    create: XOR<UserCreateWithoutRecordingsInput, UserUncheckedCreateWithoutRecordingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordingsInput, UserUncheckedUpdateWithoutRecordingsInput>
  }

  export type UserUpdateWithoutRecordingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type MeetingCreateWithoutRoomInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedMeetingsInput
    attendees?: MeetingAttendeeCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutRoomInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    attendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutRoomInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutRoomInput, MeetingUncheckedCreateWithoutRoomInput>
  }

  export type MeetingCreateManyRoomInputEnvelope = {
    data: MeetingCreateManyRoomInput | MeetingCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutRoomInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutRoomInput, MeetingUncheckedUpdateWithoutRoomInput>
    create: XOR<MeetingCreateWithoutRoomInput, MeetingUncheckedCreateWithoutRoomInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutRoomInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutRoomInput, MeetingUncheckedUpdateWithoutRoomInput>
  }

  export type MeetingUpdateManyWithWhereWithoutRoomInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutMeetingsInput = {
    id?: string
    name: string
    capacity?: number
    location?: string | null
    description?: string | null
    color?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RoomUncheckedCreateWithoutMeetingsInput = {
    id?: string
    name: string
    capacity?: number
    location?: string | null
    description?: string | null
    color?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutMeetingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMeetingsInput, RoomUncheckedCreateWithoutMeetingsInput>
  }

  export type UserCreateWithoutCreatedMeetingsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutCreatedMeetingsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutCreatedMeetingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
  }

  export type MeetingAttendeeCreateWithoutMeetingInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutMeetingAttendeesInput
  }

  export type MeetingAttendeeUncheckedCreateWithoutMeetingInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    userId?: string | null
  }

  export type MeetingAttendeeCreateOrConnectWithoutMeetingInput = {
    where: MeetingAttendeeWhereUniqueInput
    create: XOR<MeetingAttendeeCreateWithoutMeetingInput, MeetingAttendeeUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingAttendeeCreateManyMeetingInputEnvelope = {
    data: MeetingAttendeeCreateManyMeetingInput | MeetingAttendeeCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutMeetingsInput = {
    update: XOR<RoomUpdateWithoutMeetingsInput, RoomUncheckedUpdateWithoutMeetingsInput>
    create: XOR<RoomCreateWithoutMeetingsInput, RoomUncheckedCreateWithoutMeetingsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMeetingsInput, RoomUncheckedUpdateWithoutMeetingsInput>
  }

  export type RoomUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCreatedMeetingsInput = {
    update: XOR<UserUpdateWithoutCreatedMeetingsInput, UserUncheckedUpdateWithoutCreatedMeetingsInput>
    create: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedMeetingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedMeetingsInput, UserUncheckedUpdateWithoutCreatedMeetingsInput>
  }

  export type UserUpdateWithoutCreatedMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type MeetingAttendeeUpsertWithWhereUniqueWithoutMeetingInput = {
    where: MeetingAttendeeWhereUniqueInput
    update: XOR<MeetingAttendeeUpdateWithoutMeetingInput, MeetingAttendeeUncheckedUpdateWithoutMeetingInput>
    create: XOR<MeetingAttendeeCreateWithoutMeetingInput, MeetingAttendeeUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingAttendeeUpdateWithWhereUniqueWithoutMeetingInput = {
    where: MeetingAttendeeWhereUniqueInput
    data: XOR<MeetingAttendeeUpdateWithoutMeetingInput, MeetingAttendeeUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingAttendeeUpdateManyWithWhereWithoutMeetingInput = {
    where: MeetingAttendeeScalarWhereInput
    data: XOR<MeetingAttendeeUpdateManyMutationInput, MeetingAttendeeUncheckedUpdateManyWithoutMeetingInput>
  }

  export type MeetingCreateWithoutAttendeesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutMeetingsInput
    createdBy: UserCreateNestedOneWithoutCreatedMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutAttendeesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: string
    userId: string
  }

  export type MeetingCreateOrConnectWithoutAttendeesInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutAttendeesInput, MeetingUncheckedCreateWithoutAttendeesInput>
  }

  export type UserCreateWithoutMeetingAttendeesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutMeetingAttendeesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutMeetingAttendeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
  }

  export type MeetingUpsertWithoutAttendeesInput = {
    update: XOR<MeetingUpdateWithoutAttendeesInput, MeetingUncheckedUpdateWithoutAttendeesInput>
    create: XOR<MeetingCreateWithoutAttendeesInput, MeetingUncheckedCreateWithoutAttendeesInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutAttendeesInput, MeetingUncheckedUpdateWithoutAttendeesInput>
  }

  export type MeetingUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMeetingsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutMeetingAttendeesInput = {
    update: XOR<UserUpdateWithoutMeetingAttendeesInput, UserUncheckedUpdateWithoutMeetingAttendeesInput>
    create: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingAttendeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingAttendeesInput, UserUncheckedUpdateWithoutMeetingAttendeesInput>
  }

  export type UserUpdateWithoutMeetingAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMeetingAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type UserCreateWithoutOwnedSpacesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutOwnedSpacesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutOwnedSpacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedSpacesInput, UserUncheckedCreateWithoutOwnedSpacesInput>
  }

  export type SpaceMemberCreateWithoutSpaceInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    user: UserCreateNestedOneWithoutSpaceMembershipsInput
    warnings?: WarningCreateNestedManyWithoutMemberInput
    notifications?: NotificationCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberUncheckedCreateWithoutSpaceInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    userId: string
    warnings?: WarningUncheckedCreateNestedManyWithoutMemberInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberCreateOrConnectWithoutSpaceInput = {
    where: SpaceMemberWhereUniqueInput
    create: XOR<SpaceMemberCreateWithoutSpaceInput, SpaceMemberUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceMemberCreateManySpaceInputEnvelope = {
    data: SpaceMemberCreateManySpaceInput | SpaceMemberCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type ChannelCreateWithoutSpaceInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedChannelsInput
    messages?: MessageCreateNestedManyWithoutChannelInput
    notifications?: NotificationCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutSpaceInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutSpaceInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutSpaceInput, ChannelUncheckedCreateWithoutSpaceInput>
  }

  export type ChannelCreateManySpaceInputEnvelope = {
    data: ChannelCreateManySpaceInput | ChannelCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type OtpInviteCreateWithoutSpaceInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    sentBy: UserCreateNestedOneWithoutSentOtpInvitesInput
  }

  export type OtpInviteUncheckedCreateWithoutSpaceInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    userId: string
  }

  export type OtpInviteCreateOrConnectWithoutSpaceInput = {
    where: OtpInviteWhereUniqueInput
    create: XOR<OtpInviteCreateWithoutSpaceInput, OtpInviteUncheckedCreateWithoutSpaceInput>
  }

  export type OtpInviteCreateManySpaceInputEnvelope = {
    data: OtpInviteCreateManySpaceInput | OtpInviteCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedSpacesInput = {
    update: XOR<UserUpdateWithoutOwnedSpacesInput, UserUncheckedUpdateWithoutOwnedSpacesInput>
    create: XOR<UserCreateWithoutOwnedSpacesInput, UserUncheckedCreateWithoutOwnedSpacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedSpacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedSpacesInput, UserUncheckedUpdateWithoutOwnedSpacesInput>
  }

  export type UserUpdateWithoutOwnedSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type SpaceMemberUpsertWithWhereUniqueWithoutSpaceInput = {
    where: SpaceMemberWhereUniqueInput
    update: XOR<SpaceMemberUpdateWithoutSpaceInput, SpaceMemberUncheckedUpdateWithoutSpaceInput>
    create: XOR<SpaceMemberCreateWithoutSpaceInput, SpaceMemberUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceMemberUpdateWithWhereUniqueWithoutSpaceInput = {
    where: SpaceMemberWhereUniqueInput
    data: XOR<SpaceMemberUpdateWithoutSpaceInput, SpaceMemberUncheckedUpdateWithoutSpaceInput>
  }

  export type SpaceMemberUpdateManyWithWhereWithoutSpaceInput = {
    where: SpaceMemberScalarWhereInput
    data: XOR<SpaceMemberUpdateManyMutationInput, SpaceMemberUncheckedUpdateManyWithoutSpaceInput>
  }

  export type ChannelUpsertWithWhereUniqueWithoutSpaceInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutSpaceInput, ChannelUncheckedUpdateWithoutSpaceInput>
    create: XOR<ChannelCreateWithoutSpaceInput, ChannelUncheckedCreateWithoutSpaceInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutSpaceInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutSpaceInput, ChannelUncheckedUpdateWithoutSpaceInput>
  }

  export type ChannelUpdateManyWithWhereWithoutSpaceInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutSpaceInput>
  }

  export type OtpInviteUpsertWithWhereUniqueWithoutSpaceInput = {
    where: OtpInviteWhereUniqueInput
    update: XOR<OtpInviteUpdateWithoutSpaceInput, OtpInviteUncheckedUpdateWithoutSpaceInput>
    create: XOR<OtpInviteCreateWithoutSpaceInput, OtpInviteUncheckedCreateWithoutSpaceInput>
  }

  export type OtpInviteUpdateWithWhereUniqueWithoutSpaceInput = {
    where: OtpInviteWhereUniqueInput
    data: XOR<OtpInviteUpdateWithoutSpaceInput, OtpInviteUncheckedUpdateWithoutSpaceInput>
  }

  export type OtpInviteUpdateManyWithWhereWithoutSpaceInput = {
    where: OtpInviteScalarWhereInput
    data: XOR<OtpInviteUpdateManyMutationInput, OtpInviteUncheckedUpdateManyWithoutSpaceInput>
  }

  export type SpaceCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedSpacesInput
    channels?: ChannelCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    channels?: ChannelUncheckedCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutMembersInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutMembersInput, SpaceUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutSpaceMembershipsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutSpaceMembershipsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutSpaceMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpaceMembershipsInput, UserUncheckedCreateWithoutSpaceMembershipsInput>
  }

  export type WarningCreateWithoutMemberInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    issuedBy: UserCreateNestedOneWithoutIssuedWarningsInput
  }

  export type WarningUncheckedCreateWithoutMemberInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    userId: string
  }

  export type WarningCreateOrConnectWithoutMemberInput = {
    where: WarningWhereUniqueInput
    create: XOR<WarningCreateWithoutMemberInput, WarningUncheckedCreateWithoutMemberInput>
  }

  export type WarningCreateManyMemberInputEnvelope = {
    data: WarningCreateManyMemberInput | WarningCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutMemberInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    channel?: ChannelCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutMemberInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    channelId?: string | null
    messageId?: string | null
  }

  export type NotificationCreateOrConnectWithoutMemberInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutMemberInput, NotificationUncheckedCreateWithoutMemberInput>
  }

  export type NotificationCreateManyMemberInputEnvelope = {
    data: NotificationCreateManyMemberInput | NotificationCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type SpaceUpsertWithoutMembersInput = {
    update: XOR<SpaceUpdateWithoutMembersInput, SpaceUncheckedUpdateWithoutMembersInput>
    create: XOR<SpaceCreateWithoutMembersInput, SpaceUncheckedCreateWithoutMembersInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutMembersInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutMembersInput, SpaceUncheckedUpdateWithoutMembersInput>
  }

  export type SpaceUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedSpacesNestedInput
    channels?: ChannelUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    channels?: ChannelUncheckedUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type UserUpsertWithoutSpaceMembershipsInput = {
    update: XOR<UserUpdateWithoutSpaceMembershipsInput, UserUncheckedUpdateWithoutSpaceMembershipsInput>
    create: XOR<UserCreateWithoutSpaceMembershipsInput, UserUncheckedCreateWithoutSpaceMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpaceMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpaceMembershipsInput, UserUncheckedUpdateWithoutSpaceMembershipsInput>
  }

  export type UserUpdateWithoutSpaceMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSpaceMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type WarningUpsertWithWhereUniqueWithoutMemberInput = {
    where: WarningWhereUniqueInput
    update: XOR<WarningUpdateWithoutMemberInput, WarningUncheckedUpdateWithoutMemberInput>
    create: XOR<WarningCreateWithoutMemberInput, WarningUncheckedCreateWithoutMemberInput>
  }

  export type WarningUpdateWithWhereUniqueWithoutMemberInput = {
    where: WarningWhereUniqueInput
    data: XOR<WarningUpdateWithoutMemberInput, WarningUncheckedUpdateWithoutMemberInput>
  }

  export type WarningUpdateManyWithWhereWithoutMemberInput = {
    where: WarningScalarWhereInput
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyWithoutMemberInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutMemberInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutMemberInput, NotificationUncheckedUpdateWithoutMemberInput>
    create: XOR<NotificationCreateWithoutMemberInput, NotificationUncheckedCreateWithoutMemberInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutMemberInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutMemberInput, NotificationUncheckedUpdateWithoutMemberInput>
  }

  export type NotificationUpdateManyWithWhereWithoutMemberInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutMemberInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    memberId?: StringFilter<"Notification"> | string
    channelId?: StringNullableFilter<"Notification"> | string | null
    messageId?: StringNullableFilter<"Notification"> | string | null
  }

  export type SpaceMemberCreateWithoutWarningsInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    space: SpaceCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutSpaceMembershipsInput
    notifications?: NotificationCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberUncheckedCreateWithoutWarningsInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    spaceId: string
    userId: string
    notifications?: NotificationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberCreateOrConnectWithoutWarningsInput = {
    where: SpaceMemberWhereUniqueInput
    create: XOR<SpaceMemberCreateWithoutWarningsInput, SpaceMemberUncheckedCreateWithoutWarningsInput>
  }

  export type UserCreateWithoutIssuedWarningsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
  }

  export type UserUncheckedCreateWithoutIssuedWarningsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
  }

  export type UserCreateOrConnectWithoutIssuedWarningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIssuedWarningsInput, UserUncheckedCreateWithoutIssuedWarningsInput>
  }

  export type SpaceMemberUpsertWithoutWarningsInput = {
    update: XOR<SpaceMemberUpdateWithoutWarningsInput, SpaceMemberUncheckedUpdateWithoutWarningsInput>
    create: XOR<SpaceMemberCreateWithoutWarningsInput, SpaceMemberUncheckedCreateWithoutWarningsInput>
    where?: SpaceMemberWhereInput
  }

  export type SpaceMemberUpdateToOneWithWhereWithoutWarningsInput = {
    where?: SpaceMemberWhereInput
    data: XOR<SpaceMemberUpdateWithoutWarningsInput, SpaceMemberUncheckedUpdateWithoutWarningsInput>
  }

  export type SpaceMemberUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space?: SpaceUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutSpaceMembershipsNestedInput
    notifications?: NotificationUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberUncheckedUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type UserUpsertWithoutIssuedWarningsInput = {
    update: XOR<UserUpdateWithoutIssuedWarningsInput, UserUncheckedUpdateWithoutIssuedWarningsInput>
    create: XOR<UserCreateWithoutIssuedWarningsInput, UserUncheckedCreateWithoutIssuedWarningsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIssuedWarningsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIssuedWarningsInput, UserUncheckedUpdateWithoutIssuedWarningsInput>
  }

  export type UserUpdateWithoutIssuedWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
  }

  export type UserUncheckedUpdateWithoutIssuedWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
  }

  export type SpaceCreateWithoutChannelsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedSpacesInput
    members?: SpaceMemberCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutChannelsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: SpaceMemberUncheckedCreateNestedManyWithoutSpaceInput
    otpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutChannelsInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutChannelsInput, SpaceUncheckedCreateWithoutChannelsInput>
  }

  export type UserCreateWithoutCreatedChannelsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutCreatedChannelsInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutCreatedChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedChannelsInput, UserUncheckedCreateWithoutCreatedChannelsInput>
  }

  export type MessageCreateWithoutChannelInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    notifications?: NotificationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutChannelInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    userId: string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutChannelInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageCreateManyChannelInputEnvelope = {
    data: MessageCreateManyChannelInput | MessageCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutChannelInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    member: SpaceMemberCreateNestedOneWithoutNotificationsInput
    message?: MessageCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutChannelInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    memberId: string
    messageId?: string | null
  }

  export type NotificationCreateOrConnectWithoutChannelInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutChannelInput, NotificationUncheckedCreateWithoutChannelInput>
  }

  export type NotificationCreateManyChannelInputEnvelope = {
    data: NotificationCreateManyChannelInput | NotificationCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type SpaceUpsertWithoutChannelsInput = {
    update: XOR<SpaceUpdateWithoutChannelsInput, SpaceUncheckedUpdateWithoutChannelsInput>
    create: XOR<SpaceCreateWithoutChannelsInput, SpaceUncheckedCreateWithoutChannelsInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutChannelsInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutChannelsInput, SpaceUncheckedUpdateWithoutChannelsInput>
  }

  export type SpaceUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedSpacesNestedInput
    members?: SpaceMemberUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: SpaceMemberUncheckedUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type UserUpsertWithoutCreatedChannelsInput = {
    update: XOR<UserUpdateWithoutCreatedChannelsInput, UserUncheckedUpdateWithoutCreatedChannelsInput>
    create: XOR<UserCreateWithoutCreatedChannelsInput, UserUncheckedCreateWithoutCreatedChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedChannelsInput, UserUncheckedUpdateWithoutCreatedChannelsInput>
  }

  export type UserUpdateWithoutCreatedChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
  }

  export type MessageUpdateManyWithWhereWithoutChannelInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChannelInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutChannelInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutChannelInput, NotificationUncheckedUpdateWithoutChannelInput>
    create: XOR<NotificationCreateWithoutChannelInput, NotificationUncheckedCreateWithoutChannelInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutChannelInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutChannelInput, NotificationUncheckedUpdateWithoutChannelInput>
  }

  export type NotificationUpdateManyWithWhereWithoutChannelInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutChannelInput>
  }

  export type ChannelCreateWithoutMessagesInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    space: SpaceCreateNestedOneWithoutChannelsInput
    createdBy: UserCreateNestedOneWithoutCreatedChannelsInput
    notifications?: NotificationCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceId: string
    userId: string
    notifications?: NotificationUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutMessagesInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    sentOtpInvites?: OtpInviteCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    sentOtpInvites?: OtpInviteUncheckedCreateNestedManyWithoutSentByInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type MessageCreateWithoutRepliesInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    notifications?: NotificationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    userId: string
    replyToId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutRepliesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
  }

  export type MessageCreateWithoutReplyToInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    notifications?: NotificationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutReplyToInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    userId: string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput>
  }

  export type MessageCreateManyReplyToInputEnvelope = {
    data: MessageCreateManyReplyToInput | MessageCreateManyReplyToInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutMessageInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    member: SpaceMemberCreateNestedOneWithoutNotificationsInput
    channel?: ChannelCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutMessageInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    memberId: string
    channelId?: string | null
  }

  export type NotificationCreateOrConnectWithoutMessageInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutMessageInput, NotificationUncheckedCreateWithoutMessageInput>
  }

  export type NotificationCreateManyMessageInputEnvelope = {
    data: NotificationCreateManyMessageInput | NotificationCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ChannelUpsertWithoutMessagesInput = {
    update: XOR<ChannelUpdateWithoutMessagesInput, ChannelUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutMessagesInput, ChannelUncheckedUpdateWithoutMessagesInput>
  }

  export type ChannelUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutChannelsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedChannelsNestedInput
    notifications?: NotificationUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    sentOtpInvites?: OtpInviteUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    sentOtpInvites?: OtpInviteUncheckedUpdateManyWithoutSentByNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type MessageUpsertWithoutRepliesInput = {
    update: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    notifications?: NotificationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReplyToInput, MessageUncheckedUpdateWithoutReplyToInput>
    create: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReplyToInput, MessageUncheckedUpdateWithoutReplyToInput>
  }

  export type MessageUpdateManyWithWhereWithoutReplyToInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReplyToInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutMessageInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutMessageInput, NotificationUncheckedUpdateWithoutMessageInput>
    create: XOR<NotificationCreateWithoutMessageInput, NotificationUncheckedCreateWithoutMessageInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutMessageInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutMessageInput, NotificationUncheckedUpdateWithoutMessageInput>
  }

  export type NotificationUpdateManyWithWhereWithoutMessageInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutMessageInput>
  }

  export type SpaceCreateWithoutOtpInvitesInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedSpacesInput
    members?: SpaceMemberCreateNestedManyWithoutSpaceInput
    channels?: ChannelCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutOtpInvitesInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: SpaceMemberUncheckedCreateNestedManyWithoutSpaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutOtpInvitesInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutOtpInvitesInput, SpaceUncheckedCreateWithoutOtpInvitesInput>
  }

  export type UserCreateWithoutSentOtpInvitesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberCreateNestedManyWithoutUserInput
    createdChannels?: ChannelCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    issuedWarnings?: WarningCreateNestedManyWithoutIssuedByInput
  }

  export type UserUncheckedCreateWithoutSentOtpInvitesInput = {
    id: string
    email: string
    name?: string | null
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recordings?: RecordingUncheckedCreateNestedManyWithoutCreatedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatedByInput
    meetingAttendees?: MeetingAttendeeUncheckedCreateNestedManyWithoutUserInput
    ownedSpaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput
    spaceMemberships?: SpaceMemberUncheckedCreateNestedManyWithoutUserInput
    createdChannels?: ChannelUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    issuedWarnings?: WarningUncheckedCreateNestedManyWithoutIssuedByInput
  }

  export type UserCreateOrConnectWithoutSentOtpInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentOtpInvitesInput, UserUncheckedCreateWithoutSentOtpInvitesInput>
  }

  export type SpaceUpsertWithoutOtpInvitesInput = {
    update: XOR<SpaceUpdateWithoutOtpInvitesInput, SpaceUncheckedUpdateWithoutOtpInvitesInput>
    create: XOR<SpaceCreateWithoutOtpInvitesInput, SpaceUncheckedCreateWithoutOtpInvitesInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutOtpInvitesInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutOtpInvitesInput, SpaceUncheckedUpdateWithoutOtpInvitesInput>
  }

  export type SpaceUpdateWithoutOtpInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedSpacesNestedInput
    members?: SpaceMemberUpdateManyWithoutSpaceNestedInput
    channels?: ChannelUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutOtpInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: SpaceMemberUncheckedUpdateManyWithoutSpaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type UserUpsertWithoutSentOtpInvitesInput = {
    update: XOR<UserUpdateWithoutSentOtpInvitesInput, UserUncheckedUpdateWithoutSentOtpInvitesInput>
    create: XOR<UserCreateWithoutSentOtpInvitesInput, UserUncheckedCreateWithoutSentOtpInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentOtpInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentOtpInvitesInput, UserUncheckedUpdateWithoutSentOtpInvitesInput>
  }

  export type UserUpdateWithoutSentOtpInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    issuedWarnings?: WarningUpdateManyWithoutIssuedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSentOtpInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordings?: RecordingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatedByNestedInput
    meetingAttendees?: MeetingAttendeeUncheckedUpdateManyWithoutUserNestedInput
    ownedSpaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput
    spaceMemberships?: SpaceMemberUncheckedUpdateManyWithoutUserNestedInput
    createdChannels?: ChannelUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    issuedWarnings?: WarningUncheckedUpdateManyWithoutIssuedByNestedInput
  }

  export type SpaceMemberCreateWithoutNotificationsInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    space: SpaceCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutSpaceMembershipsInput
    warnings?: WarningCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberUncheckedCreateWithoutNotificationsInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    spaceId: string
    userId: string
    warnings?: WarningUncheckedCreateNestedManyWithoutMemberInput
  }

  export type SpaceMemberCreateOrConnectWithoutNotificationsInput = {
    where: SpaceMemberWhereUniqueInput
    create: XOR<SpaceMemberCreateWithoutNotificationsInput, SpaceMemberUncheckedCreateWithoutNotificationsInput>
  }

  export type ChannelCreateWithoutNotificationsInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    space: SpaceCreateNestedOneWithoutChannelsInput
    createdBy: UserCreateNestedOneWithoutCreatedChannelsInput
    messages?: MessageCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceId: string
    userId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutNotificationsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutNotificationsInput, ChannelUncheckedCreateWithoutNotificationsInput>
  }

  export type MessageCreateWithoutNotificationsInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
  }

  export type MessageUncheckedCreateWithoutNotificationsInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    userId: string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type MessageCreateOrConnectWithoutNotificationsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutNotificationsInput, MessageUncheckedCreateWithoutNotificationsInput>
  }

  export type SpaceMemberUpsertWithoutNotificationsInput = {
    update: XOR<SpaceMemberUpdateWithoutNotificationsInput, SpaceMemberUncheckedUpdateWithoutNotificationsInput>
    create: XOR<SpaceMemberCreateWithoutNotificationsInput, SpaceMemberUncheckedCreateWithoutNotificationsInput>
    where?: SpaceMemberWhereInput
  }

  export type SpaceMemberUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: SpaceMemberWhereInput
    data: XOR<SpaceMemberUpdateWithoutNotificationsInput, SpaceMemberUncheckedUpdateWithoutNotificationsInput>
  }

  export type SpaceMemberUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space?: SpaceUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutSpaceMembershipsNestedInput
    warnings?: WarningUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    warnings?: WarningUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type ChannelUpsertWithoutNotificationsInput = {
    update: XOR<ChannelUpdateWithoutNotificationsInput, ChannelUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ChannelCreateWithoutNotificationsInput, ChannelUncheckedCreateWithoutNotificationsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutNotificationsInput, ChannelUncheckedUpdateWithoutNotificationsInput>
  }

  export type ChannelUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutChannelsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedChannelsNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type MessageUpsertWithoutNotificationsInput = {
    update: XOR<MessageUpdateWithoutNotificationsInput, MessageUncheckedUpdateWithoutNotificationsInput>
    create: XOR<MessageCreateWithoutNotificationsInput, MessageUncheckedCreateWithoutNotificationsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutNotificationsInput, MessageUncheckedUpdateWithoutNotificationsInput>
  }

  export type MessageUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
  }

  export type MessageUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type RecordingCreateManyCreatedByInput = {
    id?: string
    title: string
    audioUrl: string
    duration?: number | null
    transcription?: string | null
    summary?: string | null
    status?: $Enums.RecordingStatus
    exportedPdfUrl?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId: string
  }

  export type MeetingAttendeeCreateManyUserInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    meetingId: string
  }

  export type SpaceCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    objective?: string | null
    adminRole: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpaceMemberCreateManyUserInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    spaceId: string
  }

  export type ChannelCreateManyCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceId: string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    replyToId?: string | null
  }

  export type OtpInviteCreateManySentByInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    spaceId: string
  }

  export type WarningCreateManyIssuedByInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    memberId: string
  }

  export type RecordingUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    transcription?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordingStatusFieldUpdateOperationsInput | $Enums.RecordingStatus
    exportedPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordingUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    transcription?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordingStatusFieldUpdateOperationsInput | $Enums.RecordingStatus
    exportedPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordingUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    transcription?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordingStatusFieldUpdateOperationsInput | $Enums.RecordingStatus
    exportedPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMeetingsNestedInput
    attendees?: MeetingAttendeeUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: StringFieldUpdateOperationsInput | string
    attendees?: MeetingAttendeeUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingAttendeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type MeetingAttendeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingAttendeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: SpaceMemberUpdateManyWithoutSpaceNestedInput
    channels?: ChannelUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: SpaceMemberUncheckedUpdateManyWithoutSpaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutSpaceNestedInput
    otpInvites?: OtpInviteUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    adminRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space?: SpaceUpdateOneRequiredWithoutMembersNestedInput
    warnings?: WarningUpdateManyWithoutMemberNestedInput
    notifications?: NotificationUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spaceId?: StringFieldUpdateOperationsInput | string
    warnings?: WarningUncheckedUpdateManyWithoutMemberNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutChannelsNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
    notifications?: NotificationUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtpInviteUpdateWithoutSentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutOtpInvitesNestedInput
  }

  export type OtpInviteUncheckedUpdateWithoutSentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type OtpInviteUncheckedUpdateManyWithoutSentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type WarningUpdateWithoutIssuedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: SpaceMemberUpdateOneRequiredWithoutWarningsNestedInput
  }

  export type WarningUncheckedUpdateWithoutIssuedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type WarningUncheckedUpdateManyWithoutIssuedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingCreateManyRoomInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MeetingUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    attendees?: MeetingAttendeeUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    attendees?: MeetingAttendeeUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingAttendeeCreateManyMeetingInput = {
    id?: string
    name?: string | null
    email?: string | null
    isPresent?: boolean
    createdAt?: Date | string
    userId?: string | null
  }

  export type MeetingAttendeeUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMeetingAttendeesNestedInput
  }

  export type MeetingAttendeeUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeetingAttendeeUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpaceMemberCreateManySpaceInput = {
    id?: string
    role?: $Enums.SpaceRole
    status?: $Enums.MemberStatus
    joinedAt?: Date | string
    updatedAt?: Date | string
    blockedUntil?: Date | string | null
    userId: string
  }

  export type ChannelCreateManySpaceInput = {
    id?: string
    name: string
    description?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type OtpInviteCreateManySpaceInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    userId: string
  }

  export type SpaceMemberUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSpaceMembershipsNestedInput
    warnings?: WarningUpdateManyWithoutMemberNestedInput
    notifications?: NotificationUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    warnings?: WarningUncheckedUpdateManyWithoutMemberNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type SpaceMemberUncheckedUpdateManyWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSpaceRoleFieldUpdateOperationsInput | $Enums.SpaceRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedChannelsNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
    notifications?: NotificationUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OtpInviteUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentBy?: UserUpdateOneRequiredWithoutSentOtpInvitesNestedInput
  }

  export type OtpInviteUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OtpInviteUncheckedUpdateManyWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WarningCreateManyMemberInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    userId: string
  }

  export type NotificationCreateManyMemberInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    channelId?: string | null
    messageId?: string | null
  }

  export type WarningUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBy?: UserUpdateOneRequiredWithoutIssuedWarningsNestedInput
  }

  export type WarningUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WarningUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyChannelInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    userId: string
    replyToId?: string | null
  }

  export type NotificationCreateManyChannelInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    memberId: string
    messageId?: string | null
  }

  export type MessageUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: SpaceMemberUpdateOneRequiredWithoutNotificationsNestedInput
    message?: MessageUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyReplyToInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    isPinned?: boolean
    pinnedAt?: Date | string | null
    editedAt?: Date | string | null
    createdAt?: Date | string
    channelId: string
    userId: string
  }

  export type NotificationCreateManyMessageInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    memberId: string
    channelId?: string | null
  }

  export type MessageUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    pinnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: SpaceMemberUpdateOneRequiredWithoutNotificationsNestedInput
    channel?: ChannelUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}