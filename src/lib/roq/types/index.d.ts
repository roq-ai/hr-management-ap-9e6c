/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model attendance
 *
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model job_position
 *
 */
export type job_position = $Result.DefaultSelection<Prisma.$job_positionPayload>;
/**
 * Model leave_request
 *
 */
export type leave_request = $Result.DefaultSelection<Prisma.$leave_requestPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendances
 * const attendances = await prisma.attendance.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
   * ```
   */
  get attendance(): Prisma.attendanceDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.job_position`: Exposes CRUD operations for the **job_position** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_positions
   * const job_positions = await prisma.job_position.findMany()
   * ```
   */
  get job_position(): Prisma.job_positionDelegate<ExtArgs>;

  /**
   * `prisma.leave_request`: Exposes CRUD operations for the **leave_request** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Leave_requests
   * const leave_requests = await prisma.leave_request.findMany()
   * ```
   */
  get leave_request(): Prisma.leave_requestDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    attendance: 'attendance';
    company: 'company';
    employee: 'employee';
    job_position: 'job_position';
    leave_request: 'leave_request';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'attendance' | 'company' | 'employee' | 'job_position' | 'leave_request' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>;
        fields: Prisma.attendanceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[];
          };
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAttendance>;
          };
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AttendanceGroupByOutputType>[];
          };
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>;
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      job_position: {
        payload: Prisma.$job_positionPayload<ExtArgs>;
        fields: Prisma.job_positionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_positionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_positionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          findFirst: {
            args: Prisma.job_positionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_positionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          findMany: {
            args: Prisma.job_positionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>[];
          };
          create: {
            args: Prisma.job_positionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          createMany: {
            args: Prisma.job_positionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_positionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          update: {
            args: Prisma.job_positionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          deleteMany: {
            args: Prisma.job_positionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_positionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_positionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          aggregate: {
            args: Prisma.Job_positionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_position>;
          };
          groupBy: {
            args: Prisma.job_positionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_positionGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_positionCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_positionCountAggregateOutputType> | number;
          };
        };
      };
      leave_request: {
        payload: Prisma.$leave_requestPayload<ExtArgs>;
        fields: Prisma.leave_requestFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.leave_requestFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.leave_requestFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>;
          };
          findFirst: {
            args: Prisma.leave_requestFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.leave_requestFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>;
          };
          findMany: {
            args: Prisma.leave_requestFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>[];
          };
          create: {
            args: Prisma.leave_requestCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>;
          };
          createMany: {
            args: Prisma.leave_requestCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.leave_requestDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>;
          };
          update: {
            args: Prisma.leave_requestUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>;
          };
          deleteMany: {
            args: Prisma.leave_requestDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.leave_requestUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.leave_requestUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>;
          };
          aggregate: {
            args: Prisma.Leave_requestAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLeave_request>;
          };
          groupBy: {
            args: Prisma.leave_requestGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Leave_requestGroupByOutputType>[];
          };
          count: {
            args: Prisma.leave_requestCountArgs<ExtArgs>;
            result: $Utils.Optional<Leave_requestCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    job_position: number;
    user: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_position?: boolean | CompanyCountOutputTypeCountJob_positionArgs;
    user?: boolean | CompanyCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJob_positionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_positionWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    attendance: number;
    leave_request: number;
  };

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | EmployeeCountOutputTypeCountAttendanceArgs;
    leave_request?: boolean | EmployeeCountOutputTypeCountLeave_requestArgs;
  };

  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAttendanceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: attendanceWhereInput;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLeave_requestArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: leave_requestWhereInput;
  };

  /**
   * Count Type Job_positionCountOutputType
   */

  export type Job_positionCountOutputType = {
    employee: number;
  };

  export type Job_positionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Job_positionCountOutputTypeCountEmployeeArgs;
  };

  // Custom InputTypes

  /**
   * Job_positionCountOutputType without action
   */
  export type Job_positionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job_positionCountOutputType
     */
    select?: Job_positionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Job_positionCountOutputType without action
   */
  export type Job_positionCountOutputTypeCountEmployeeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: employeeWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employee: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null;
    _avg: AttendanceAvgAggregateOutputType | null;
    _sum: AttendanceSumAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
  };

  export type AttendanceAvgAggregateOutputType = {
    hours_worked: number | null;
  };

  export type AttendanceSumAggregateOutputType = {
    hours_worked: number | null;
  };

  export type AttendanceMinAggregateOutputType = {
    id: string | null;
    employee_id: string | null;
    date: Date | null;
    time_in: Date | null;
    time_out: Date | null;
    hours_worked: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AttendanceMaxAggregateOutputType = {
    id: string | null;
    employee_id: string | null;
    date: Date | null;
    time_in: Date | null;
    time_out: Date | null;
    hours_worked: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AttendanceCountAggregateOutputType = {
    id: number;
    employee_id: number;
    date: number;
    time_in: number;
    time_out: number;
    hours_worked: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AttendanceAvgAggregateInputType = {
    hours_worked?: true;
  };

  export type AttendanceSumAggregateInputType = {
    hours_worked?: true;
  };

  export type AttendanceMinAggregateInputType = {
    id?: true;
    employee_id?: true;
    date?: true;
    time_in?: true;
    time_out?: true;
    hours_worked?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AttendanceMaxAggregateInputType = {
    id?: true;
    employee_id?: true;
    date?: true;
    time_in?: true;
    time_out?: true;
    hours_worked?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AttendanceCountAggregateInputType = {
    id?: true;
    employee_id?: true;
    date?: true;
    time_in?: true;
    time_out?: true;
    hours_worked?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned attendances
     **/
    _count?: true | AttendanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AttendanceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AttendanceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AttendanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AttendanceMaxAggregateInputType;
  };

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>;
  };

  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput;
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[];
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum;
    having?: attendanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceCountAggregateInputType | true;
    _avg?: AttendanceAvgAggregateInputType;
    _sum?: AttendanceSumAggregateInputType;
    _min?: AttendanceMinAggregateInputType;
    _max?: AttendanceMaxAggregateInputType;
  };

  export type AttendanceGroupByOutputType = {
    id: string;
    employee_id: string;
    date: Date;
    time_in: Date | null;
    time_out: Date | null;
    hours_worked: number | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: AttendanceCountAggregateOutputType | null;
    _avg: AttendanceAvgAggregateOutputType | null;
    _sum: AttendanceSumAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
  };

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AttendanceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
          : GetScalarType<T[P], AttendanceGroupByOutputType[P]>;
      }
    >
  >;

  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        employee_id?: boolean;
        date?: boolean;
        time_in?: boolean;
        time_out?: boolean;
        hours_worked?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['attendance']
    >;

  export type attendanceSelectScalar = {
    id?: boolean;
    employee_id?: boolean;
    date?: boolean;
    time_in?: boolean;
    time_out?: boolean;
    hours_worked?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'attendance';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        employee_id: string;
        date: Date;
        time_in: Date | null;
        time_out: Date | null;
        hours_worked: number | null;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['attendance']
    >;
    composites: {};
  };

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<
    Prisma.$attendancePayload,
    S
  >;

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    attendanceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AttendanceCountAggregateInputType | true;
  };

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance']; meta: { name: 'attendance' } };
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends attendanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Attendance that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends attendanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     *
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends attendanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     *
     **/
    create<T extends attendanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Attendances.
     *     @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     *     @example
     *     // Create many Attendances
     *     const attendance = await prisma.attendance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends attendanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     *
     **/
    delete<T extends attendanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends attendanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends attendanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends attendanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     **/
    upsert<T extends attendanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
     **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(
      args: Subset<T, AttendanceAggregateArgs>,
    ): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>;

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
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
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the attendance model
     */
    readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the attendance model
   */
  interface attendanceFieldRefs {
    readonly id: FieldRef<'attendance', 'String'>;
    readonly employee_id: FieldRef<'attendance', 'String'>;
    readonly date: FieldRef<'attendance', 'DateTime'>;
    readonly time_in: FieldRef<'attendance', 'DateTime'>;
    readonly time_out: FieldRef<'attendance', 'DateTime'>;
    readonly hours_worked: FieldRef<'attendance', 'Int'>;
    readonly status: FieldRef<'attendance', 'String'>;
    readonly created_at: FieldRef<'attendance', 'DateTime'>;
    readonly updated_at: FieldRef<'attendance', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>;
  };

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>;
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>;
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput;
  };

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput;
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>;
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>;
  };

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput;
  };

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone_number: number;
    website: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone_number?: boolean;
      website?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      job_position?: boolean | company$job_positionArgs<ExtArgs>;
      user?: boolean | company$userArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone_number?: boolean;
    website?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_position?: boolean | company$job_positionArgs<ExtArgs>;
    user?: boolean | company$userArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      job_position: Prisma.$job_positionPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone_number: string | null;
        website: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_position<T extends company$job_positionArgs<ExtArgs> = {}>(
      args?: Subset<T, company$job_positionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends company$userArgs<ExtArgs> = {}>(
      args?: Subset<T, company$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly phone_number: FieldRef<'company', 'String'>;
    readonly website: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.job_position
   */
  export type company$job_positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    where?: job_positionWhereInput;
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    cursor?: job_positionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_positionScalarFieldEnum | Job_positionScalarFieldEnum[];
  };

  /**
   * company.user
   */
  export type company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_position_id: string | null;
    date_hired: Date | null;
    date_terminated: Date | null;
    salary: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_position_id: string | null;
    date_hired: Date | null;
    date_terminated: Date | null;
    salary: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    user_id: number;
    job_position_id: number;
    date_hired: number;
    date_terminated: number;
    salary: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    salary?: true;
  };

  export type EmployeeSumAggregateInputType = {
    salary?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    user_id?: true;
    job_position_id?: true;
    date_hired?: true;
    date_terminated?: true;
    salary?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    job_position_id?: true;
    date_hired?: true;
    date_terminated?: true;
    salary?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    user_id?: true;
    job_position_id?: true;
    date_hired?: true;
    date_terminated?: true;
    salary?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    user_id: string;
    job_position_id: string;
    date_hired: Date | null;
    date_terminated: Date | null;
    salary: number | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        job_position_id?: boolean;
        date_hired?: boolean;
        date_terminated?: boolean;
        salary?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        attendance?: boolean | employee$attendanceArgs<ExtArgs>;
        job_position?: boolean | job_positionDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        leave_request?: boolean | employee$leave_requestArgs<ExtArgs>;
        _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    job_position_id?: boolean;
    date_hired?: boolean;
    date_terminated?: boolean;
    salary?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | employee$attendanceArgs<ExtArgs>;
    job_position?: boolean | job_positionDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    leave_request?: boolean | employee$leave_requestArgs<ExtArgs>;
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[];
      job_position: Prisma.$job_positionPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      leave_request: Prisma.$leave_requestPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        job_position_id: string;
        date_hired: Date | null;
        date_terminated: Date | null;
        salary: number | null;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
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
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attendance<T extends employee$attendanceArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$attendanceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    job_position<T extends job_positionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, job_positionDefaultArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    leave_request<T extends employee$leave_requestArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$leave_requestArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly job_position_id: FieldRef<'employee', 'String'>;
    readonly date_hired: FieldRef<'employee', 'DateTime'>;
    readonly date_terminated: FieldRef<'employee', 'DateTime'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly status: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee.attendance
   */
  export type employee$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    where?: attendanceWhereInput;
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    cursor?: attendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * employee.leave_request
   */
  export type employee$leave_requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    where?: leave_requestWhereInput;
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[];
    cursor?: leave_requestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[];
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model job_position
   */

  export type AggregateJob_position = {
    _count: Job_positionCountAggregateOutputType | null;
    _avg: Job_positionAvgAggregateOutputType | null;
    _sum: Job_positionSumAggregateOutputType | null;
    _min: Job_positionMinAggregateOutputType | null;
    _max: Job_positionMaxAggregateOutputType | null;
  };

  export type Job_positionAvgAggregateOutputType = {
    salary: number | null;
  };

  export type Job_positionSumAggregateOutputType = {
    salary: number | null;
  };

  export type Job_positionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    salary: number | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_positionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    salary: number | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_positionCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    salary: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_positionAvgAggregateInputType = {
    salary?: true;
  };

  export type Job_positionSumAggregateInputType = {
    salary?: true;
  };

  export type Job_positionMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    salary?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_positionMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    salary?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_positionCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    salary?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_positionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_position to aggregate.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_positions
     **/
    _count?: true | Job_positionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Job_positionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Job_positionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_positionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_positionMaxAggregateInputType;
  };

  export type GetJob_positionAggregateType<T extends Job_positionAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_position]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_position[P]>
      : GetScalarType<T[P], AggregateJob_position[P]>;
  };

  export type job_positionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_positionWhereInput;
    orderBy?: job_positionOrderByWithAggregationInput | job_positionOrderByWithAggregationInput[];
    by: Job_positionScalarFieldEnum[] | Job_positionScalarFieldEnum;
    having?: job_positionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_positionCountAggregateInputType | true;
    _avg?: Job_positionAvgAggregateInputType;
    _sum?: Job_positionSumAggregateInputType;
    _min?: Job_positionMinAggregateInputType;
    _max?: Job_positionMaxAggregateInputType;
  };

  export type Job_positionGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    salary: number | null;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Job_positionCountAggregateOutputType | null;
    _avg: Job_positionAvgAggregateOutputType | null;
    _sum: Job_positionSumAggregateOutputType | null;
    _min: Job_positionMinAggregateOutputType | null;
    _max: Job_positionMaxAggregateOutputType | null;
  };

  type GetJob_positionGroupByPayload<T extends job_positionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_positionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_positionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_positionGroupByOutputType[P]>
          : GetScalarType<T[P], Job_positionGroupByOutputType[P]>;
      }
    >
  >;

  export type job_positionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        salary?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | job_position$employeeArgs<ExtArgs>;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        _count?: boolean | Job_positionCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_position']
    >;

  export type job_positionSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    salary?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_positionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | job_position$employeeArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    _count?: boolean | Job_positionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $job_positionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_position';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        salary: number | null;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_position']
    >;
    composites: {};
  };

  type job_positionGetPayload<S extends boolean | null | undefined | job_positionDefaultArgs> = $Result.GetResult<
    Prisma.$job_positionPayload,
    S
  >;

  type job_positionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_positionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Job_positionCountAggregateInputType | true;
  };

  export interface job_positionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_position']; meta: { name: 'job_position' } };
    /**
     * Find zero or one Job_position that matches the filter.
     * @param {job_positionFindUniqueArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_positionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_position that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_positionFindUniqueOrThrowArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_positionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionFindFirstArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_positionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindFirstArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionFindFirstOrThrowArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_positionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_positions
     * const job_positions = await prisma.job_position.findMany()
     *
     * // Get first 10 Job_positions
     * const job_positions = await prisma.job_position.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_positionWithIdOnly = await prisma.job_position.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_positionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_position.
     * @param {job_positionCreateArgs} args - Arguments to create a Job_position.
     * @example
     * // Create one Job_position
     * const Job_position = await prisma.job_position.create({
     *   data: {
     *     // ... data to create a Job_position
     *   }
     * })
     *
     **/
    create<T extends job_positionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionCreateArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Job_positions.
     *     @param {job_positionCreateManyArgs} args - Arguments to create many Job_positions.
     *     @example
     *     // Create many Job_positions
     *     const job_position = await prisma.job_position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_positionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_position.
     * @param {job_positionDeleteArgs} args - Arguments to delete one Job_position.
     * @example
     * // Delete one Job_position
     * const Job_position = await prisma.job_position.delete({
     *   where: {
     *     // ... filter to delete one Job_position
     *   }
     * })
     *
     **/
    delete<T extends job_positionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionDeleteArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job_position.
     * @param {job_positionUpdateArgs} args - Arguments to update one Job_position.
     * @example
     * // Update one Job_position
     * const job_position = await prisma.job_position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_positionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionUpdateArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Job_positions.
     * @param {job_positionDeleteManyArgs} args - Arguments to filter Job_positions to delete.
     * @example
     * // Delete a few Job_positions
     * const { count } = await prisma.job_position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_positionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_positions
     * const job_position = await prisma.job_position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_positionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_position.
     * @param {job_positionUpsertArgs} args - Arguments to update or create a Job_position.
     * @example
     * // Update or create a Job_position
     * const job_position = await prisma.job_position.upsert({
     *   create: {
     *     // ... data to create a Job_position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_position we want to update
     *   }
     * })
     **/
    upsert<T extends job_positionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionUpsertArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionCountArgs} args - Arguments to filter Job_positions to count.
     * @example
     * // Count the number of Job_positions
     * const count = await prisma.job_position.count({
     *   where: {
     *     // ... the filter for the Job_positions we want to count
     *   }
     * })
     **/
    count<T extends job_positionCountArgs>(
      args?: Subset<T, job_positionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_positionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_positionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_positionAggregateArgs>(
      args: Subset<T, Job_positionAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_positionAggregateType<T>>;

    /**
     * Group by Job_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionGroupByArgs} args - Group by arguments.
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
      T extends job_positionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_positionGroupByArgs['orderBy'] }
        : { orderBy?: job_positionGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_positionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_positionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_position model
     */
    readonly fields: job_positionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_positionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends job_position$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, job_position$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_position model
   */
  interface job_positionFieldRefs {
    readonly id: FieldRef<'job_position', 'String'>;
    readonly title: FieldRef<'job_position', 'String'>;
    readonly description: FieldRef<'job_position', 'String'>;
    readonly salary: FieldRef<'job_position', 'Int'>;
    readonly company_id: FieldRef<'job_position', 'String'>;
    readonly created_at: FieldRef<'job_position', 'DateTime'>;
    readonly updated_at: FieldRef<'job_position', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_position findUnique
   */
  export type job_positionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position findUniqueOrThrow
   */
  export type job_positionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position findFirst
   */
  export type job_positionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_positions.
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_positions.
     */
    distinct?: Job_positionScalarFieldEnum | Job_positionScalarFieldEnum[];
  };

  /**
   * job_position findFirstOrThrow
   */
  export type job_positionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_positions.
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_positions.
     */
    distinct?: Job_positionScalarFieldEnum | Job_positionScalarFieldEnum[];
  };

  /**
   * job_position findMany
   */
  export type job_positionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * Filter, which job_positions to fetch.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_positions.
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    distinct?: Job_positionScalarFieldEnum | Job_positionScalarFieldEnum[];
  };

  /**
   * job_position create
   */
  export type job_positionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_position.
     */
    data: XOR<job_positionCreateInput, job_positionUncheckedCreateInput>;
  };

  /**
   * job_position createMany
   */
  export type job_positionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_positions.
     */
    data: job_positionCreateManyInput | job_positionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_position update
   */
  export type job_positionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_position.
     */
    data: XOR<job_positionUpdateInput, job_positionUncheckedUpdateInput>;
    /**
     * Choose, which job_position to update.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position updateMany
   */
  export type job_positionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_positions.
     */
    data: XOR<job_positionUpdateManyMutationInput, job_positionUncheckedUpdateManyInput>;
    /**
     * Filter which job_positions to update
     */
    where?: job_positionWhereInput;
  };

  /**
   * job_position upsert
   */
  export type job_positionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_position to update in case it exists.
     */
    where: job_positionWhereUniqueInput;
    /**
     * In case the job_position found by the `where` argument doesn't exist, create a new job_position with this data.
     */
    create: XOR<job_positionCreateInput, job_positionUncheckedCreateInput>;
    /**
     * In case the job_position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_positionUpdateInput, job_positionUncheckedUpdateInput>;
  };

  /**
   * job_position delete
   */
  export type job_positionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
    /**
     * Filter which job_position to delete.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position deleteMany
   */
  export type job_positionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_positions to delete
     */
    where?: job_positionWhereInput;
  };

  /**
   * job_position.employee
   */
  export type job_position$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * job_position without action
   */
  export type job_positionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_positionInclude<ExtArgs> | null;
  };

  /**
   * Model leave_request
   */

  export type AggregateLeave_request = {
    _count: Leave_requestCountAggregateOutputType | null;
    _min: Leave_requestMinAggregateOutputType | null;
    _max: Leave_requestMaxAggregateOutputType | null;
  };

  export type Leave_requestMinAggregateOutputType = {
    id: string | null;
    employee_id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    leave_type: string | null;
    reason: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Leave_requestMaxAggregateOutputType = {
    id: string | null;
    employee_id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    leave_type: string | null;
    reason: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Leave_requestCountAggregateOutputType = {
    id: number;
    employee_id: number;
    start_date: number;
    end_date: number;
    leave_type: number;
    reason: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Leave_requestMinAggregateInputType = {
    id?: true;
    employee_id?: true;
    start_date?: true;
    end_date?: true;
    leave_type?: true;
    reason?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Leave_requestMaxAggregateInputType = {
    id?: true;
    employee_id?: true;
    start_date?: true;
    end_date?: true;
    leave_type?: true;
    reason?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Leave_requestCountAggregateInputType = {
    id?: true;
    employee_id?: true;
    start_date?: true;
    end_date?: true;
    leave_type?: true;
    reason?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Leave_requestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_request to aggregate.
     */
    where?: leave_requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: leave_requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leave_requests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned leave_requests
     **/
    _count?: true | Leave_requestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Leave_requestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Leave_requestMaxAggregateInputType;
  };

  export type GetLeave_requestAggregateType<T extends Leave_requestAggregateArgs> = {
    [P in keyof T & keyof AggregateLeave_request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_request[P]>
      : GetScalarType<T[P], AggregateLeave_request[P]>;
  };

  export type leave_requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput;
    orderBy?: leave_requestOrderByWithAggregationInput | leave_requestOrderByWithAggregationInput[];
    by: Leave_requestScalarFieldEnum[] | Leave_requestScalarFieldEnum;
    having?: leave_requestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Leave_requestCountAggregateInputType | true;
    _min?: Leave_requestMinAggregateInputType;
    _max?: Leave_requestMaxAggregateInputType;
  };

  export type Leave_requestGroupByOutputType = {
    id: string;
    employee_id: string;
    start_date: Date;
    end_date: Date;
    leave_type: string;
    reason: string | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: Leave_requestCountAggregateOutputType | null;
    _min: Leave_requestMinAggregateOutputType | null;
    _max: Leave_requestMaxAggregateOutputType | null;
  };

  type GetLeave_requestGroupByPayload<T extends leave_requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_requestGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Leave_requestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Leave_requestGroupByOutputType[P]>
          : GetScalarType<T[P], Leave_requestGroupByOutputType[P]>;
      }
    >
  >;

  export type leave_requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        employee_id?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        leave_type?: boolean;
        reason?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['leave_request']
    >;

  export type leave_requestSelectScalar = {
    id?: boolean;
    employee_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    leave_type?: boolean;
    reason?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type leave_requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $leave_requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'leave_request';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        employee_id: string;
        start_date: Date;
        end_date: Date;
        leave_type: string;
        reason: string | null;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['leave_request']
    >;
    composites: {};
  };

  type leave_requestGetPayload<S extends boolean | null | undefined | leave_requestDefaultArgs> = $Result.GetResult<
    Prisma.$leave_requestPayload,
    S
  >;

  type leave_requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    leave_requestFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Leave_requestCountAggregateInputType | true;
  };

  export interface leave_requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_request']; meta: { name: 'leave_request' } };
    /**
     * Find zero or one Leave_request that matches the filter.
     * @param {leave_requestFindUniqueArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends leave_requestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, leave_requestFindUniqueArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Leave_request that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {leave_requestFindUniqueOrThrowArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends leave_requestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, leave_requestFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Leave_request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindFirstArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends leave_requestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, leave_requestFindFirstArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Leave_request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindFirstOrThrowArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends leave_requestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, leave_requestFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Leave_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_requests
     * const leave_requests = await prisma.leave_request.findMany()
     *
     * // Get first 10 Leave_requests
     * const leave_requests = await prisma.leave_request.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leave_requestWithIdOnly = await prisma.leave_request.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends leave_requestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, leave_requestFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Leave_request.
     * @param {leave_requestCreateArgs} args - Arguments to create a Leave_request.
     * @example
     * // Create one Leave_request
     * const Leave_request = await prisma.leave_request.create({
     *   data: {
     *     // ... data to create a Leave_request
     *   }
     * })
     *
     **/
    create<T extends leave_requestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, leave_requestCreateArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Leave_requests.
     *     @param {leave_requestCreateManyArgs} args - Arguments to create many Leave_requests.
     *     @example
     *     // Create many Leave_requests
     *     const leave_request = await prisma.leave_request.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends leave_requestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, leave_requestCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Leave_request.
     * @param {leave_requestDeleteArgs} args - Arguments to delete one Leave_request.
     * @example
     * // Delete one Leave_request
     * const Leave_request = await prisma.leave_request.delete({
     *   where: {
     *     // ... filter to delete one Leave_request
     *   }
     * })
     *
     **/
    delete<T extends leave_requestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, leave_requestDeleteArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Leave_request.
     * @param {leave_requestUpdateArgs} args - Arguments to update one Leave_request.
     * @example
     * // Update one Leave_request
     * const leave_request = await prisma.leave_request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends leave_requestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, leave_requestUpdateArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Leave_requests.
     * @param {leave_requestDeleteManyArgs} args - Arguments to filter Leave_requests to delete.
     * @example
     * // Delete a few Leave_requests
     * const { count } = await prisma.leave_request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends leave_requestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, leave_requestDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Leave_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_requests
     * const leave_request = await prisma.leave_request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends leave_requestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, leave_requestUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Leave_request.
     * @param {leave_requestUpsertArgs} args - Arguments to update or create a Leave_request.
     * @example
     * // Update or create a Leave_request
     * const leave_request = await prisma.leave_request.upsert({
     *   create: {
     *     // ... data to create a Leave_request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_request we want to update
     *   }
     * })
     **/
    upsert<T extends leave_requestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, leave_requestUpsertArgs<ExtArgs>>,
    ): Prisma__leave_requestClient<
      $Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Leave_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestCountArgs} args - Arguments to filter Leave_requests to count.
     * @example
     * // Count the number of Leave_requests
     * const count = await prisma.leave_request.count({
     *   where: {
     *     // ... the filter for the Leave_requests we want to count
     *   }
     * })
     **/
    count<T extends leave_requestCountArgs>(
      args?: Subset<T, leave_requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_requestCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Leave_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_requestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Leave_requestAggregateArgs>(
      args: Subset<T, Leave_requestAggregateArgs>,
    ): Prisma.PrismaPromise<GetLeave_requestAggregateType<T>>;

    /**
     * Group by Leave_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestGroupByArgs} args - Group by arguments.
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
      T extends leave_requestGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_requestGroupByArgs['orderBy'] }
        : { orderBy?: leave_requestGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, leave_requestGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLeave_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the leave_request model
     */
    readonly fields: leave_requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_requestClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the leave_request model
   */
  interface leave_requestFieldRefs {
    readonly id: FieldRef<'leave_request', 'String'>;
    readonly employee_id: FieldRef<'leave_request', 'String'>;
    readonly start_date: FieldRef<'leave_request', 'DateTime'>;
    readonly end_date: FieldRef<'leave_request', 'DateTime'>;
    readonly leave_type: FieldRef<'leave_request', 'String'>;
    readonly reason: FieldRef<'leave_request', 'String'>;
    readonly status: FieldRef<'leave_request', 'String'>;
    readonly created_at: FieldRef<'leave_request', 'DateTime'>;
    readonly updated_at: FieldRef<'leave_request', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * leave_request findUnique
   */
  export type leave_requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * Filter, which leave_request to fetch.
     */
    where: leave_requestWhereUniqueInput;
  };

  /**
   * leave_request findUniqueOrThrow
   */
  export type leave_requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * Filter, which leave_request to fetch.
     */
    where: leave_requestWhereUniqueInput;
  };

  /**
   * leave_request findFirst
   */
  export type leave_requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * Filter, which leave_request to fetch.
     */
    where?: leave_requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leave_requests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of leave_requests.
     */
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[];
  };

  /**
   * leave_request findFirstOrThrow
   */
  export type leave_requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * Filter, which leave_request to fetch.
     */
    where?: leave_requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leave_requests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of leave_requests.
     */
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[];
  };

  /**
   * leave_request findMany
   */
  export type leave_requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * Filter, which leave_requests to fetch.
     */
    where?: leave_requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leave_requests.
     */
    skip?: number;
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[];
  };

  /**
   * leave_request create
   */
  export type leave_requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * The data needed to create a leave_request.
     */
    data: XOR<leave_requestCreateInput, leave_requestUncheckedCreateInput>;
  };

  /**
   * leave_request createMany
   */
  export type leave_requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_requests.
     */
    data: leave_requestCreateManyInput | leave_requestCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * leave_request update
   */
  export type leave_requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * The data needed to update a leave_request.
     */
    data: XOR<leave_requestUpdateInput, leave_requestUncheckedUpdateInput>;
    /**
     * Choose, which leave_request to update.
     */
    where: leave_requestWhereUniqueInput;
  };

  /**
   * leave_request updateMany
   */
  export type leave_requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_requests.
     */
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyInput>;
    /**
     * Filter which leave_requests to update
     */
    where?: leave_requestWhereInput;
  };

  /**
   * leave_request upsert
   */
  export type leave_requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * The filter to search for the leave_request to update in case it exists.
     */
    where: leave_requestWhereUniqueInput;
    /**
     * In case the leave_request found by the `where` argument doesn't exist, create a new leave_request with this data.
     */
    create: XOR<leave_requestCreateInput, leave_requestUncheckedCreateInput>;
    /**
     * In case the leave_request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_requestUpdateInput, leave_requestUncheckedUpdateInput>;
  };

  /**
   * leave_request delete
   */
  export type leave_requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
    /**
     * Filter which leave_request to delete.
     */
    where: leave_requestWhereUniqueInput;
  };

  /**
   * leave_request deleteMany
   */
  export type leave_requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_requests to delete
     */
    where?: leave_requestWhereInput;
  };

  /**
   * leave_request without action
   */
  export type leave_requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leave_requestInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    company_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      company_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    company_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | user$employeeArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        company_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly company_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AttendanceScalarFieldEnum: {
    id: 'id';
    employee_id: 'employee_id';
    date: 'date';
    time_in: 'time_in';
    time_out: 'time_out';
    hours_worked: 'hours_worked';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone_number: 'phone_number';
    website: 'website';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    job_position_id: 'job_position_id';
    date_hired: 'date_hired';
    date_terminated: 'date_terminated';
    salary: 'salary';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const Job_positionScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    salary: 'salary';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_positionScalarFieldEnum =
    (typeof Job_positionScalarFieldEnum)[keyof typeof Job_positionScalarFieldEnum];

  export const Leave_requestScalarFieldEnum: {
    id: 'id';
    employee_id: 'employee_id';
    start_date: 'start_date';
    end_date: 'end_date';
    leave_type: 'leave_type';
    reason: 'reason';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Leave_requestScalarFieldEnum =
    (typeof Leave_requestScalarFieldEnum)[keyof typeof Leave_requestScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    company_id: 'company_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[];
    OR?: attendanceWhereInput[];
    NOT?: attendanceWhereInput | attendanceWhereInput[];
    id?: UuidFilter<'attendance'> | string;
    employee_id?: UuidFilter<'attendance'> | string;
    date?: DateTimeFilter<'attendance'> | Date | string;
    time_in?: DateTimeNullableFilter<'attendance'> | Date | string | null;
    time_out?: DateTimeNullableFilter<'attendance'> | Date | string | null;
    hours_worked?: IntNullableFilter<'attendance'> | number | null;
    status?: StringFilter<'attendance'> | string;
    created_at?: DateTimeFilter<'attendance'> | Date | string;
    updated_at?: DateTimeFilter<'attendance'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    date?: SortOrder;
    time_in?: SortOrderInput | SortOrder;
    time_out?: SortOrderInput | SortOrder;
    hours_worked?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type attendanceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: attendanceWhereInput | attendanceWhereInput[];
      OR?: attendanceWhereInput[];
      NOT?: attendanceWhereInput | attendanceWhereInput[];
      employee_id?: UuidFilter<'attendance'> | string;
      date?: DateTimeFilter<'attendance'> | Date | string;
      time_in?: DateTimeNullableFilter<'attendance'> | Date | string | null;
      time_out?: DateTimeNullableFilter<'attendance'> | Date | string | null;
      hours_worked?: IntNullableFilter<'attendance'> | number | null;
      status?: StringFilter<'attendance'> | string;
      created_at?: DateTimeFilter<'attendance'> | Date | string;
      updated_at?: DateTimeFilter<'attendance'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    date?: SortOrder;
    time_in?: SortOrderInput | SortOrder;
    time_out?: SortOrderInput | SortOrder;
    hours_worked?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: attendanceCountOrderByAggregateInput;
    _avg?: attendanceAvgOrderByAggregateInput;
    _max?: attendanceMaxOrderByAggregateInput;
    _min?: attendanceMinOrderByAggregateInput;
    _sum?: attendanceSumOrderByAggregateInput;
  };

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[];
    OR?: attendanceScalarWhereWithAggregatesInput[];
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'attendance'> | string;
    employee_id?: UuidWithAggregatesFilter<'attendance'> | string;
    date?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    time_in?: DateTimeNullableWithAggregatesFilter<'attendance'> | Date | string | null;
    time_out?: DateTimeNullableWithAggregatesFilter<'attendance'> | Date | string | null;
    hours_worked?: IntNullableWithAggregatesFilter<'attendance'> | number | null;
    status?: StringWithAggregatesFilter<'attendance'> | string;
    created_at?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    phone_number?: StringNullableFilter<'company'> | string | null;
    website?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    job_position?: Job_positionListRelationFilter;
    user?: UserListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_position?: job_positionOrderByRelationAggregateInput;
    user?: userOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      phone_number?: StringNullableFilter<'company'> | string | null;
      website?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      job_position?: Job_positionListRelationFilter;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'company'> | string | null;
    website?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
  };

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    job_position_id?: UuidFilter<'employee'> | string;
    date_hired?: DateTimeNullableFilter<'employee'> | Date | string | null;
    date_terminated?: DateTimeNullableFilter<'employee'> | Date | string | null;
    salary?: IntNullableFilter<'employee'> | number | null;
    status?: StringFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    attendance?: AttendanceListRelationFilter;
    job_position?: XOR<Job_positionRelationFilter, job_positionWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    leave_request?: Leave_requestListRelationFilter;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_position_id?: SortOrder;
    date_hired?: SortOrderInput | SortOrder;
    date_terminated?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    attendance?: attendanceOrderByRelationAggregateInput;
    job_position?: job_positionOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    leave_request?: leave_requestOrderByRelationAggregateInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      user_id?: UuidFilter<'employee'> | string;
      job_position_id?: UuidFilter<'employee'> | string;
      date_hired?: DateTimeNullableFilter<'employee'> | Date | string | null;
      date_terminated?: DateTimeNullableFilter<'employee'> | Date | string | null;
      salary?: IntNullableFilter<'employee'> | number | null;
      status?: StringFilter<'employee'> | string;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      attendance?: AttendanceListRelationFilter;
      job_position?: XOR<Job_positionRelationFilter, job_positionWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      leave_request?: Leave_requestListRelationFilter;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_position_id?: SortOrder;
    date_hired?: SortOrderInput | SortOrder;
    date_terminated?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    job_position_id?: UuidWithAggregatesFilter<'employee'> | string;
    date_hired?: DateTimeNullableWithAggregatesFilter<'employee'> | Date | string | null;
    date_terminated?: DateTimeNullableWithAggregatesFilter<'employee'> | Date | string | null;
    salary?: IntNullableWithAggregatesFilter<'employee'> | number | null;
    status?: StringWithAggregatesFilter<'employee'> | string;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type job_positionWhereInput = {
    AND?: job_positionWhereInput | job_positionWhereInput[];
    OR?: job_positionWhereInput[];
    NOT?: job_positionWhereInput | job_positionWhereInput[];
    id?: UuidFilter<'job_position'> | string;
    title?: StringFilter<'job_position'> | string;
    description?: StringNullableFilter<'job_position'> | string | null;
    salary?: IntNullableFilter<'job_position'> | number | null;
    company_id?: UuidFilter<'job_position'> | string;
    created_at?: DateTimeFilter<'job_position'> | Date | string;
    updated_at?: DateTimeFilter<'job_position'> | Date | string;
    employee?: EmployeeListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
  };

  export type job_positionOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type job_positionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_positionWhereInput | job_positionWhereInput[];
      OR?: job_positionWhereInput[];
      NOT?: job_positionWhereInput | job_positionWhereInput[];
      title?: StringFilter<'job_position'> | string;
      description?: StringNullableFilter<'job_position'> | string | null;
      salary?: IntNullableFilter<'job_position'> | number | null;
      company_id?: UuidFilter<'job_position'> | string;
      created_at?: DateTimeFilter<'job_position'> | Date | string;
      updated_at?: DateTimeFilter<'job_position'> | Date | string;
      employee?: EmployeeListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
    },
    'id'
  >;

  export type job_positionOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_positionCountOrderByAggregateInput;
    _avg?: job_positionAvgOrderByAggregateInput;
    _max?: job_positionMaxOrderByAggregateInput;
    _min?: job_positionMinOrderByAggregateInput;
    _sum?: job_positionSumOrderByAggregateInput;
  };

  export type job_positionScalarWhereWithAggregatesInput = {
    AND?: job_positionScalarWhereWithAggregatesInput | job_positionScalarWhereWithAggregatesInput[];
    OR?: job_positionScalarWhereWithAggregatesInput[];
    NOT?: job_positionScalarWhereWithAggregatesInput | job_positionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_position'> | string;
    title?: StringWithAggregatesFilter<'job_position'> | string;
    description?: StringNullableWithAggregatesFilter<'job_position'> | string | null;
    salary?: IntNullableWithAggregatesFilter<'job_position'> | number | null;
    company_id?: UuidWithAggregatesFilter<'job_position'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job_position'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_position'> | Date | string;
  };

  export type leave_requestWhereInput = {
    AND?: leave_requestWhereInput | leave_requestWhereInput[];
    OR?: leave_requestWhereInput[];
    NOT?: leave_requestWhereInput | leave_requestWhereInput[];
    id?: UuidFilter<'leave_request'> | string;
    employee_id?: UuidFilter<'leave_request'> | string;
    start_date?: DateTimeFilter<'leave_request'> | Date | string;
    end_date?: DateTimeFilter<'leave_request'> | Date | string;
    leave_type?: StringFilter<'leave_request'> | string;
    reason?: StringNullableFilter<'leave_request'> | string | null;
    status?: StringFilter<'leave_request'> | string;
    created_at?: DateTimeFilter<'leave_request'> | Date | string;
    updated_at?: DateTimeFilter<'leave_request'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type leave_requestOrderByWithRelationInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    leave_type?: SortOrder;
    reason?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type leave_requestWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: leave_requestWhereInput | leave_requestWhereInput[];
      OR?: leave_requestWhereInput[];
      NOT?: leave_requestWhereInput | leave_requestWhereInput[];
      employee_id?: UuidFilter<'leave_request'> | string;
      start_date?: DateTimeFilter<'leave_request'> | Date | string;
      end_date?: DateTimeFilter<'leave_request'> | Date | string;
      leave_type?: StringFilter<'leave_request'> | string;
      reason?: StringNullableFilter<'leave_request'> | string | null;
      status?: StringFilter<'leave_request'> | string;
      created_at?: DateTimeFilter<'leave_request'> | Date | string;
      updated_at?: DateTimeFilter<'leave_request'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type leave_requestOrderByWithAggregationInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    leave_type?: SortOrder;
    reason?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: leave_requestCountOrderByAggregateInput;
    _max?: leave_requestMaxOrderByAggregateInput;
    _min?: leave_requestMinOrderByAggregateInput;
  };

  export type leave_requestScalarWhereWithAggregatesInput = {
    AND?: leave_requestScalarWhereWithAggregatesInput | leave_requestScalarWhereWithAggregatesInput[];
    OR?: leave_requestScalarWhereWithAggregatesInput[];
    NOT?: leave_requestScalarWhereWithAggregatesInput | leave_requestScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'leave_request'> | string;
    employee_id?: UuidWithAggregatesFilter<'leave_request'> | string;
    start_date?: DateTimeWithAggregatesFilter<'leave_request'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'leave_request'> | Date | string;
    leave_type?: StringWithAggregatesFilter<'leave_request'> | string;
    reason?: StringNullableWithAggregatesFilter<'leave_request'> | string | null;
    status?: StringWithAggregatesFilter<'leave_request'> | string;
    created_at?: DateTimeWithAggregatesFilter<'leave_request'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'leave_request'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    employee?: EmployeeListRelationFilter;
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      company_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      employee?: EmployeeListRelationFilter;
      company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    company_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type attendanceCreateInput = {
    id?: string;
    date: Date | string;
    time_in?: Date | string | null;
    time_out?: Date | string | null;
    hours_worked?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutAttendanceInput;
  };

  export type attendanceUncheckedCreateInput = {
    id?: string;
    employee_id: string;
    date: Date | string;
    time_in?: Date | string | null;
    time_out?: Date | string | null;
    hours_worked?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hours_worked?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutAttendanceNestedInput;
  };

  export type attendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hours_worked?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceCreateManyInput = {
    id?: string;
    employee_id: string;
    date: Date | string;
    time_in?: Date | string | null;
    time_out?: Date | string | null;
    hours_worked?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hours_worked?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hours_worked?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_position?: job_positionCreateNestedManyWithoutCompanyInput;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_position?: job_positionUncheckedCreateNestedManyWithoutCompanyInput;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_position?: job_positionUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_position?: job_positionUncheckedUpdateManyWithoutCompanyNestedInput;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateInput = {
    id?: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutEmployeeInput;
    job_position: job_positionCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    leave_request?: leave_requestCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    user_id: string;
    job_position_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutEmployeeInput;
    leave_request?: leave_requestUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutEmployeeNestedInput;
    job_position?: job_positionUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    leave_request?: leave_requestUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_position_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutEmployeeNestedInput;
    leave_request?: leave_requestUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateManyInput = {
    id?: string;
    user_id: string;
    job_position_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_position_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_positionCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutJob_positionInput;
    company: companyCreateNestedOneWithoutJob_positionInput;
  };

  export type job_positionUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutJob_positionInput;
  };

  export type job_positionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutJob_positionNestedInput;
    company?: companyUpdateOneRequiredWithoutJob_positionNestedInput;
  };

  export type job_positionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutJob_positionNestedInput;
  };

  export type job_positionCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_positionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_positionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leave_requestCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    leave_type: string;
    reason?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutLeave_requestInput;
  };

  export type leave_requestUncheckedCreateInput = {
    id?: string;
    employee_id: string;
    start_date: Date | string;
    end_date: Date | string;
    leave_type: string;
    reason?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leave_requestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_type?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutLeave_requestNestedInput;
  };

  export type leave_requestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_type?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leave_requestCreateManyInput = {
    id?: string;
    employee_id: string;
    start_date: Date | string;
    end_date: Date | string;
    leave_type: string;
    reason?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leave_requestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_type?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leave_requestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_type?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EmployeeRelationFilter = {
    is?: employeeWhereInput;
    isNot?: employeeWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    date?: SortOrder;
    time_in?: SortOrder;
    time_out?: SortOrder;
    hours_worked?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type attendanceAvgOrderByAggregateInput = {
    hours_worked?: SortOrder;
  };

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    date?: SortOrder;
    time_in?: SortOrder;
    time_out?: SortOrder;
    hours_worked?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    date?: SortOrder;
    time_in?: SortOrder;
    time_out?: SortOrder;
    hours_worked?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type attendanceSumOrderByAggregateInput = {
    hours_worked?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type Job_positionListRelationFilter = {
    every?: job_positionWhereInput;
    some?: job_positionWhereInput;
    none?: job_positionWhereInput;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type job_positionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput;
    some?: attendanceWhereInput;
    none?: attendanceWhereInput;
  };

  export type Job_positionRelationFilter = {
    is?: job_positionWhereInput;
    isNot?: job_positionWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Leave_requestListRelationFilter = {
    every?: leave_requestWhereInput;
    some?: leave_requestWhereInput;
    none?: leave_requestWhereInput;
  };

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type leave_requestOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_position_id?: SortOrder;
    date_hired?: SortOrder;
    date_terminated?: SortOrder;
    salary?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_position_id?: SortOrder;
    date_hired?: SortOrder;
    date_terminated?: SortOrder;
    salary?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_position_id?: SortOrder;
    date_hired?: SortOrder;
    date_terminated?: SortOrder;
    salary?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type job_positionCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_positionAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type job_positionMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_positionMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_positionSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type leave_requestCountOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    leave_type?: SortOrder;
    reason?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type leave_requestMaxOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    leave_type?: SortOrder;
    reason?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type leave_requestMinOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    leave_type?: SortOrder;
    reason?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type CompanyNullableRelationFilter = {
    is?: companyWhereInput | null;
    isNot?: companyWhereInput | null;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type employeeCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<employeeCreateWithoutAttendanceInput, employeeUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutAttendanceInput;
    connect?: employeeWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type employeeUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<employeeCreateWithoutAttendanceInput, employeeUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutAttendanceInput;
    upsert?: employeeUpsertWithoutAttendanceInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutAttendanceInput, employeeUpdateWithoutAttendanceInput>,
      employeeUncheckedUpdateWithoutAttendanceInput
    >;
  };

  export type job_positionCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<job_positionCreateWithoutCompanyInput, job_positionUncheckedCreateWithoutCompanyInput>
      | job_positionCreateWithoutCompanyInput[]
      | job_positionUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_positionCreateOrConnectWithoutCompanyInput | job_positionCreateOrConnectWithoutCompanyInput[];
    createMany?: job_positionCreateManyCompanyInputEnvelope;
    connect?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
  };

  export type userCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type job_positionUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<job_positionCreateWithoutCompanyInput, job_positionUncheckedCreateWithoutCompanyInput>
      | job_positionCreateWithoutCompanyInput[]
      | job_positionUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_positionCreateOrConnectWithoutCompanyInput | job_positionCreateOrConnectWithoutCompanyInput[];
    createMany?: job_positionCreateManyCompanyInputEnvelope;
    connect?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type job_positionUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<job_positionCreateWithoutCompanyInput, job_positionUncheckedCreateWithoutCompanyInput>
      | job_positionCreateWithoutCompanyInput[]
      | job_positionUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_positionCreateOrConnectWithoutCompanyInput | job_positionCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | job_positionUpsertWithWhereUniqueWithoutCompanyInput
      | job_positionUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: job_positionCreateManyCompanyInputEnvelope;
    set?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    disconnect?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    delete?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    connect?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    update?:
      | job_positionUpdateWithWhereUniqueWithoutCompanyInput
      | job_positionUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | job_positionUpdateManyWithWhereWithoutCompanyInput
      | job_positionUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: job_positionScalarWhereInput | job_positionScalarWhereInput[];
  };

  export type userUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type job_positionUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<job_positionCreateWithoutCompanyInput, job_positionUncheckedCreateWithoutCompanyInput>
      | job_positionCreateWithoutCompanyInput[]
      | job_positionUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_positionCreateOrConnectWithoutCompanyInput | job_positionCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | job_positionUpsertWithWhereUniqueWithoutCompanyInput
      | job_positionUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: job_positionCreateManyCompanyInputEnvelope;
    set?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    disconnect?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    delete?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    connect?: job_positionWhereUniqueInput | job_positionWhereUniqueInput[];
    update?:
      | job_positionUpdateWithWhereUniqueWithoutCompanyInput
      | job_positionUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | job_positionUpdateManyWithWhereWithoutCompanyInput
      | job_positionUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: job_positionScalarWhereInput | job_positionScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type attendanceCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<attendanceCreateWithoutEmployeeInput, attendanceUncheckedCreateWithoutEmployeeInput>
      | attendanceCreateWithoutEmployeeInput[]
      | attendanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutEmployeeInput | attendanceCreateOrConnectWithoutEmployeeInput[];
    createMany?: attendanceCreateManyEmployeeInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type job_positionCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<job_positionCreateWithoutEmployeeInput, job_positionUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: job_positionCreateOrConnectWithoutEmployeeInput;
    connect?: job_positionWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type leave_requestCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<leave_requestCreateWithoutEmployeeInput, leave_requestUncheckedCreateWithoutEmployeeInput>
      | leave_requestCreateWithoutEmployeeInput[]
      | leave_requestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | leave_requestCreateOrConnectWithoutEmployeeInput
      | leave_requestCreateOrConnectWithoutEmployeeInput[];
    createMany?: leave_requestCreateManyEmployeeInputEnvelope;
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
  };

  export type attendanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<attendanceCreateWithoutEmployeeInput, attendanceUncheckedCreateWithoutEmployeeInput>
      | attendanceCreateWithoutEmployeeInput[]
      | attendanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutEmployeeInput | attendanceCreateOrConnectWithoutEmployeeInput[];
    createMany?: attendanceCreateManyEmployeeInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type leave_requestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<leave_requestCreateWithoutEmployeeInput, leave_requestUncheckedCreateWithoutEmployeeInput>
      | leave_requestCreateWithoutEmployeeInput[]
      | leave_requestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | leave_requestCreateOrConnectWithoutEmployeeInput
      | leave_requestCreateOrConnectWithoutEmployeeInput[];
    createMany?: leave_requestCreateManyEmployeeInputEnvelope;
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
  };

  export type attendanceUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutEmployeeInput, attendanceUncheckedCreateWithoutEmployeeInput>
      | attendanceCreateWithoutEmployeeInput[]
      | attendanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutEmployeeInput | attendanceCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | attendanceUpsertWithWhereUniqueWithoutEmployeeInput
      | attendanceUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: attendanceCreateManyEmployeeInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?:
      | attendanceUpdateWithWhereUniqueWithoutEmployeeInput
      | attendanceUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | attendanceUpdateManyWithWhereWithoutEmployeeInput
      | attendanceUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type job_positionUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<job_positionCreateWithoutEmployeeInput, job_positionUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: job_positionCreateOrConnectWithoutEmployeeInput;
    upsert?: job_positionUpsertWithoutEmployeeInput;
    connect?: job_positionWhereUniqueInput;
    update?: XOR<
      XOR<job_positionUpdateToOneWithWhereWithoutEmployeeInput, job_positionUpdateWithoutEmployeeInput>,
      job_positionUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type leave_requestUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<leave_requestCreateWithoutEmployeeInput, leave_requestUncheckedCreateWithoutEmployeeInput>
      | leave_requestCreateWithoutEmployeeInput[]
      | leave_requestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | leave_requestCreateOrConnectWithoutEmployeeInput
      | leave_requestCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | leave_requestUpsertWithWhereUniqueWithoutEmployeeInput
      | leave_requestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: leave_requestCreateManyEmployeeInputEnvelope;
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    update?:
      | leave_requestUpdateWithWhereUniqueWithoutEmployeeInput
      | leave_requestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | leave_requestUpdateManyWithWhereWithoutEmployeeInput
      | leave_requestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[];
  };

  export type attendanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutEmployeeInput, attendanceUncheckedCreateWithoutEmployeeInput>
      | attendanceCreateWithoutEmployeeInput[]
      | attendanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutEmployeeInput | attendanceCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | attendanceUpsertWithWhereUniqueWithoutEmployeeInput
      | attendanceUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: attendanceCreateManyEmployeeInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?:
      | attendanceUpdateWithWhereUniqueWithoutEmployeeInput
      | attendanceUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | attendanceUpdateManyWithWhereWithoutEmployeeInput
      | attendanceUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type leave_requestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<leave_requestCreateWithoutEmployeeInput, leave_requestUncheckedCreateWithoutEmployeeInput>
      | leave_requestCreateWithoutEmployeeInput[]
      | leave_requestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | leave_requestCreateOrConnectWithoutEmployeeInput
      | leave_requestCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | leave_requestUpsertWithWhereUniqueWithoutEmployeeInput
      | leave_requestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: leave_requestCreateManyEmployeeInputEnvelope;
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[];
    update?:
      | leave_requestUpdateWithWhereUniqueWithoutEmployeeInput
      | leave_requestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | leave_requestUpdateManyWithWhereWithoutEmployeeInput
      | leave_requestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[];
  };

  export type employeeCreateNestedManyWithoutJob_positionInput = {
    create?:
      | XOR<employeeCreateWithoutJob_positionInput, employeeUncheckedCreateWithoutJob_positionInput>
      | employeeCreateWithoutJob_positionInput[]
      | employeeUncheckedCreateWithoutJob_positionInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutJob_positionInput
      | employeeCreateOrConnectWithoutJob_positionInput[];
    createMany?: employeeCreateManyJob_positionInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutJob_positionInput = {
    create?: XOR<companyCreateWithoutJob_positionInput, companyUncheckedCreateWithoutJob_positionInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJob_positionInput;
    connect?: companyWhereUniqueInput;
  };

  export type employeeUncheckedCreateNestedManyWithoutJob_positionInput = {
    create?:
      | XOR<employeeCreateWithoutJob_positionInput, employeeUncheckedCreateWithoutJob_positionInput>
      | employeeCreateWithoutJob_positionInput[]
      | employeeUncheckedCreateWithoutJob_positionInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutJob_positionInput
      | employeeCreateOrConnectWithoutJob_positionInput[];
    createMany?: employeeCreateManyJob_positionInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUpdateManyWithoutJob_positionNestedInput = {
    create?:
      | XOR<employeeCreateWithoutJob_positionInput, employeeUncheckedCreateWithoutJob_positionInput>
      | employeeCreateWithoutJob_positionInput[]
      | employeeUncheckedCreateWithoutJob_positionInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutJob_positionInput
      | employeeCreateOrConnectWithoutJob_positionInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutJob_positionInput
      | employeeUpsertWithWhereUniqueWithoutJob_positionInput[];
    createMany?: employeeCreateManyJob_positionInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutJob_positionInput
      | employeeUpdateWithWhereUniqueWithoutJob_positionInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutJob_positionInput
      | employeeUpdateManyWithWhereWithoutJob_positionInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutJob_positionNestedInput = {
    create?: XOR<companyCreateWithoutJob_positionInput, companyUncheckedCreateWithoutJob_positionInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJob_positionInput;
    upsert?: companyUpsertWithoutJob_positionInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutJob_positionInput, companyUpdateWithoutJob_positionInput>,
      companyUncheckedUpdateWithoutJob_positionInput
    >;
  };

  export type employeeUncheckedUpdateManyWithoutJob_positionNestedInput = {
    create?:
      | XOR<employeeCreateWithoutJob_positionInput, employeeUncheckedCreateWithoutJob_positionInput>
      | employeeCreateWithoutJob_positionInput[]
      | employeeUncheckedCreateWithoutJob_positionInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutJob_positionInput
      | employeeCreateOrConnectWithoutJob_positionInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutJob_positionInput
      | employeeUpsertWithWhereUniqueWithoutJob_positionInput[];
    createMany?: employeeCreateManyJob_positionInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutJob_positionInput
      | employeeUpdateWithWhereUniqueWithoutJob_positionInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutJob_positionInput
      | employeeUpdateManyWithWhereWithoutJob_positionInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeCreateNestedOneWithoutLeave_requestInput = {
    create?: XOR<employeeCreateWithoutLeave_requestInput, employeeUncheckedCreateWithoutLeave_requestInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutLeave_requestInput;
    connect?: employeeWhereUniqueInput;
  };

  export type employeeUpdateOneRequiredWithoutLeave_requestNestedInput = {
    create?: XOR<employeeCreateWithoutLeave_requestInput, employeeUncheckedCreateWithoutLeave_requestInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutLeave_requestInput;
    upsert?: employeeUpsertWithoutLeave_requestInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutLeave_requestInput, employeeUpdateWithoutLeave_requestInput>,
      employeeUncheckedUpdateWithoutLeave_requestInput
    >;
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutUserInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    connect?: companyWhereUniqueInput;
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type companyUpdateOneWithoutUserNestedInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    upsert?: companyUpsertWithoutUserInput;
    disconnect?: companyWhereInput | boolean;
    delete?: companyWhereInput | boolean;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutUserInput, companyUpdateWithoutUserInput>,
      companyUncheckedUpdateWithoutUserInput
    >;
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type employeeCreateWithoutAttendanceInput = {
    id?: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_position: job_positionCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    leave_request?: leave_requestCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutAttendanceInput = {
    id?: string;
    user_id: string;
    job_position_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave_request?: leave_requestUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutAttendanceInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutAttendanceInput, employeeUncheckedCreateWithoutAttendanceInput>;
  };

  export type employeeUpsertWithoutAttendanceInput = {
    update: XOR<employeeUpdateWithoutAttendanceInput, employeeUncheckedUpdateWithoutAttendanceInput>;
    create: XOR<employeeCreateWithoutAttendanceInput, employeeUncheckedCreateWithoutAttendanceInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutAttendanceInput, employeeUncheckedUpdateWithoutAttendanceInput>;
  };

  export type employeeUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_position?: job_positionUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    leave_request?: leave_requestUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_position_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_request?: leave_requestUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type job_positionCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutJob_positionInput;
  };

  export type job_positionUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutJob_positionInput;
  };

  export type job_positionCreateOrConnectWithoutCompanyInput = {
    where: job_positionWhereUniqueInput;
    create: XOR<job_positionCreateWithoutCompanyInput, job_positionUncheckedCreateWithoutCompanyInput>;
  };

  export type job_positionCreateManyCompanyInputEnvelope = {
    data: job_positionCreateManyCompanyInput | job_positionCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userCreateManyCompanyInputEnvelope = {
    data: userCreateManyCompanyInput | userCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type job_positionUpsertWithWhereUniqueWithoutCompanyInput = {
    where: job_positionWhereUniqueInput;
    update: XOR<job_positionUpdateWithoutCompanyInput, job_positionUncheckedUpdateWithoutCompanyInput>;
    create: XOR<job_positionCreateWithoutCompanyInput, job_positionUncheckedCreateWithoutCompanyInput>;
  };

  export type job_positionUpdateWithWhereUniqueWithoutCompanyInput = {
    where: job_positionWhereUniqueInput;
    data: XOR<job_positionUpdateWithoutCompanyInput, job_positionUncheckedUpdateWithoutCompanyInput>;
  };

  export type job_positionUpdateManyWithWhereWithoutCompanyInput = {
    where: job_positionScalarWhereInput;
    data: XOR<job_positionUpdateManyMutationInput, job_positionUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type job_positionScalarWhereInput = {
    AND?: job_positionScalarWhereInput | job_positionScalarWhereInput[];
    OR?: job_positionScalarWhereInput[];
    NOT?: job_positionScalarWhereInput | job_positionScalarWhereInput[];
    id?: UuidFilter<'job_position'> | string;
    title?: StringFilter<'job_position'> | string;
    description?: StringNullableFilter<'job_position'> | string | null;
    salary?: IntNullableFilter<'job_position'> | number | null;
    company_id?: UuidFilter<'job_position'> | string;
    created_at?: DateTimeFilter<'job_position'> | Date | string;
    updated_at?: DateTimeFilter<'job_position'> | Date | string;
  };

  export type userUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateManyWithWhereWithoutCompanyInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type attendanceCreateWithoutEmployeeInput = {
    id?: string;
    date: Date | string;
    time_in?: Date | string | null;
    time_out?: Date | string | null;
    hours_worked?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    date: Date | string;
    time_in?: Date | string | null;
    time_out?: Date | string | null;
    hours_worked?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceCreateOrConnectWithoutEmployeeInput = {
    where: attendanceWhereUniqueInput;
    create: XOR<attendanceCreateWithoutEmployeeInput, attendanceUncheckedCreateWithoutEmployeeInput>;
  };

  export type attendanceCreateManyEmployeeInputEnvelope = {
    data: attendanceCreateManyEmployeeInput | attendanceCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type job_positionCreateWithoutEmployeeInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutJob_positionInput;
  };

  export type job_positionUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_positionCreateOrConnectWithoutEmployeeInput = {
    where: job_positionWhereUniqueInput;
    create: XOR<job_positionCreateWithoutEmployeeInput, job_positionUncheckedCreateWithoutEmployeeInput>;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type leave_requestCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    leave_type: string;
    reason?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leave_requestUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    leave_type: string;
    reason?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leave_requestCreateOrConnectWithoutEmployeeInput = {
    where: leave_requestWhereUniqueInput;
    create: XOR<leave_requestCreateWithoutEmployeeInput, leave_requestUncheckedCreateWithoutEmployeeInput>;
  };

  export type leave_requestCreateManyEmployeeInputEnvelope = {
    data: leave_requestCreateManyEmployeeInput | leave_requestCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type attendanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: attendanceWhereUniqueInput;
    update: XOR<attendanceUpdateWithoutEmployeeInput, attendanceUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<attendanceCreateWithoutEmployeeInput, attendanceUncheckedCreateWithoutEmployeeInput>;
  };

  export type attendanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: attendanceWhereUniqueInput;
    data: XOR<attendanceUpdateWithoutEmployeeInput, attendanceUncheckedUpdateWithoutEmployeeInput>;
  };

  export type attendanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: attendanceScalarWhereInput;
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
    OR?: attendanceScalarWhereInput[];
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
    id?: UuidFilter<'attendance'> | string;
    employee_id?: UuidFilter<'attendance'> | string;
    date?: DateTimeFilter<'attendance'> | Date | string;
    time_in?: DateTimeNullableFilter<'attendance'> | Date | string | null;
    time_out?: DateTimeNullableFilter<'attendance'> | Date | string | null;
    hours_worked?: IntNullableFilter<'attendance'> | number | null;
    status?: StringFilter<'attendance'> | string;
    created_at?: DateTimeFilter<'attendance'> | Date | string;
    updated_at?: DateTimeFilter<'attendance'> | Date | string;
  };

  export type job_positionUpsertWithoutEmployeeInput = {
    update: XOR<job_positionUpdateWithoutEmployeeInput, job_positionUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<job_positionCreateWithoutEmployeeInput, job_positionUncheckedCreateWithoutEmployeeInput>;
    where?: job_positionWhereInput;
  };

  export type job_positionUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: job_positionWhereInput;
    data: XOR<job_positionUpdateWithoutEmployeeInput, job_positionUncheckedUpdateWithoutEmployeeInput>;
  };

  export type job_positionUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutJob_positionNestedInput;
  };

  export type job_positionUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leave_requestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: leave_requestWhereUniqueInput;
    update: XOR<leave_requestUpdateWithoutEmployeeInput, leave_requestUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<leave_requestCreateWithoutEmployeeInput, leave_requestUncheckedCreateWithoutEmployeeInput>;
  };

  export type leave_requestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: leave_requestWhereUniqueInput;
    data: XOR<leave_requestUpdateWithoutEmployeeInput, leave_requestUncheckedUpdateWithoutEmployeeInput>;
  };

  export type leave_requestUpdateManyWithWhereWithoutEmployeeInput = {
    where: leave_requestScalarWhereInput;
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type leave_requestScalarWhereInput = {
    AND?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[];
    OR?: leave_requestScalarWhereInput[];
    NOT?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[];
    id?: UuidFilter<'leave_request'> | string;
    employee_id?: UuidFilter<'leave_request'> | string;
    start_date?: DateTimeFilter<'leave_request'> | Date | string;
    end_date?: DateTimeFilter<'leave_request'> | Date | string;
    leave_type?: StringFilter<'leave_request'> | string;
    reason?: StringNullableFilter<'leave_request'> | string | null;
    status?: StringFilter<'leave_request'> | string;
    created_at?: DateTimeFilter<'leave_request'> | Date | string;
    updated_at?: DateTimeFilter<'leave_request'> | Date | string;
  };

  export type employeeCreateWithoutJob_positionInput = {
    id?: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    leave_request?: leave_requestCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutJob_positionInput = {
    id?: string;
    user_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutEmployeeInput;
    leave_request?: leave_requestUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutJob_positionInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutJob_positionInput, employeeUncheckedCreateWithoutJob_positionInput>;
  };

  export type employeeCreateManyJob_positionInputEnvelope = {
    data: employeeCreateManyJob_positionInput | employeeCreateManyJob_positionInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutJob_positionInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutJob_positionInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutJob_positionInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutJob_positionInput, companyUncheckedCreateWithoutJob_positionInput>;
  };

  export type employeeUpsertWithWhereUniqueWithoutJob_positionInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutJob_positionInput, employeeUncheckedUpdateWithoutJob_positionInput>;
    create: XOR<employeeCreateWithoutJob_positionInput, employeeUncheckedCreateWithoutJob_positionInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutJob_positionInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutJob_positionInput, employeeUncheckedUpdateWithoutJob_positionInput>;
  };

  export type employeeUpdateManyWithWhereWithoutJob_positionInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutJob_positionInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    job_position_id?: UuidFilter<'employee'> | string;
    date_hired?: DateTimeNullableFilter<'employee'> | Date | string | null;
    date_terminated?: DateTimeNullableFilter<'employee'> | Date | string | null;
    salary?: IntNullableFilter<'employee'> | number | null;
    status?: StringFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type companyUpsertWithoutJob_positionInput = {
    update: XOR<companyUpdateWithoutJob_positionInput, companyUncheckedUpdateWithoutJob_positionInput>;
    create: XOR<companyCreateWithoutJob_positionInput, companyUncheckedCreateWithoutJob_positionInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutJob_positionInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutJob_positionInput, companyUncheckedUpdateWithoutJob_positionInput>;
  };

  export type companyUpdateWithoutJob_positionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutJob_positionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type employeeCreateWithoutLeave_requestInput = {
    id?: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutEmployeeInput;
    job_position: job_positionCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutLeave_requestInput = {
    id?: string;
    user_id: string;
    job_position_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutLeave_requestInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutLeave_requestInput, employeeUncheckedCreateWithoutLeave_requestInput>;
  };

  export type employeeUpsertWithoutLeave_requestInput = {
    update: XOR<employeeUpdateWithoutLeave_requestInput, employeeUncheckedUpdateWithoutLeave_requestInput>;
    create: XOR<employeeCreateWithoutLeave_requestInput, employeeUncheckedCreateWithoutLeave_requestInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutLeave_requestInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutLeave_requestInput, employeeUncheckedUpdateWithoutLeave_requestInput>;
  };

  export type employeeUpdateWithoutLeave_requestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutEmployeeNestedInput;
    job_position?: job_positionUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutLeave_requestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_position_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutEmployeeInput;
    job_position: job_positionCreateNestedOneWithoutEmployeeInput;
    leave_request?: leave_requestCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    job_position_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutEmployeeInput;
    leave_request?: leave_requestUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_position?: job_positionCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_position?: job_positionUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithoutUserInput = {
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutUserInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_position?: job_positionUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_position?: job_positionUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type job_positionCreateManyCompanyInput = {
    id?: string;
    title: string;
    description?: string | null;
    salary?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateManyCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_positionUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutJob_positionNestedInput;
  };

  export type job_positionUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutJob_positionNestedInput;
  };

  export type job_positionUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceCreateManyEmployeeInput = {
    id?: string;
    date: Date | string;
    time_in?: Date | string | null;
    time_out?: Date | string | null;
    hours_worked?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leave_requestCreateManyEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    leave_type: string;
    reason?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hours_worked?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hours_worked?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hours_worked?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leave_requestUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_type?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leave_requestUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_type?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leave_requestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave_type?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyJob_positionInput = {
    id?: string;
    user_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutJob_positionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    leave_request?: leave_requestUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutJob_positionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutEmployeeNestedInput;
    leave_request?: leave_requestUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutJob_positionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    job_position_id: string;
    date_hired?: Date | string | null;
    date_terminated?: Date | string | null;
    salary?: number | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutEmployeeNestedInput;
    job_position?: job_positionUpdateOneRequiredWithoutEmployeeNestedInput;
    leave_request?: leave_requestUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_position_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutEmployeeNestedInput;
    leave_request?: leave_requestUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_position_id?: StringFieldUpdateOperationsInput | string;
    date_hired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    date_terminated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
   */
  export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Job_positionCountOutputTypeDefaultArgs instead
   */
  export type Job_positionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Job_positionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use attendanceDefaultArgs instead
   */
  export type attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    attendanceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_positionDefaultArgs instead
   */
  export type job_positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_positionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use leave_requestDefaultArgs instead
   */
  export type leave_requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    leave_requestDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
