
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Loja
 * 
 */
export type Loja = $Result.DefaultSelection<Prisma.$LojaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Orcamento
 * 
 */
export type Orcamento = $Result.DefaultSelection<Prisma.$OrcamentoPayload>
/**
 * Model ItemOrcamento
 * 
 */
export type ItemOrcamento = $Result.DefaultSelection<Prisma.$ItemOrcamentoPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>
/**
 * Model FluxoCaixa
 * 
 */
export type FluxoCaixa = $Result.DefaultSelection<Prisma.$FluxoCaixaPayload>
/**
 * Model MovimentacaoEstoque
 * 
 */
export type MovimentacaoEstoque = $Result.DefaultSelection<Prisma.$MovimentacaoEstoquePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PerfilUsuario: {
  SUPERADMIN: 'SUPERADMIN',
  GERENTE_LOJA: 'GERENTE_LOJA',
  FUNCIONARIO: 'FUNCIONARIO'
};

export type PerfilUsuario = (typeof PerfilUsuario)[keyof typeof PerfilUsuario]


export const MetodoPagamento: {
  DINHEIRO: 'DINHEIRO',
  PIX: 'PIX',
  CARTAO_DEBITO: 'CARTAO_DEBITO',
  CARTAO_CREDITO: 'CARTAO_CREDITO'
};

export type MetodoPagamento = (typeof MetodoPagamento)[keyof typeof MetodoPagamento]


export const StatusPagamento: {
  PENDENTE: 'PENDENTE',
  PARCIAL: 'PARCIAL',
  PAGO: 'PAGO',
  CANCELADO: 'CANCELADO'
};

export type StatusPagamento = (typeof StatusPagamento)[keyof typeof StatusPagamento]

}

export type PerfilUsuario = $Enums.PerfilUsuario

export const PerfilUsuario: typeof $Enums.PerfilUsuario

export type MetodoPagamento = $Enums.MetodoPagamento

export const MetodoPagamento: typeof $Enums.MetodoPagamento

export type StatusPagamento = $Enums.StatusPagamento

export const StatusPagamento: typeof $Enums.StatusPagamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lojas
 * const lojas = await prisma.loja.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Lojas
   * const lojas = await prisma.loja.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.loja`: Exposes CRUD operations for the **Loja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lojas
    * const lojas = await prisma.loja.findMany()
    * ```
    */
  get loja(): Prisma.LojaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orcamento`: Exposes CRUD operations for the **Orcamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orcamentos
    * const orcamentos = await prisma.orcamento.findMany()
    * ```
    */
  get orcamento(): Prisma.OrcamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemOrcamento`: Exposes CRUD operations for the **ItemOrcamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemOrcamentos
    * const itemOrcamentos = await prisma.itemOrcamento.findMany()
    * ```
    */
  get itemOrcamento(): Prisma.ItemOrcamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fluxoCaixa`: Exposes CRUD operations for the **FluxoCaixa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FluxoCaixas
    * const fluxoCaixas = await prisma.fluxoCaixa.findMany()
    * ```
    */
  get fluxoCaixa(): Prisma.FluxoCaixaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacaoEstoque`: Exposes CRUD operations for the **MovimentacaoEstoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimentacaoEstoques
    * const movimentacaoEstoques = await prisma.movimentacaoEstoque.findMany()
    * ```
    */
  get movimentacaoEstoque(): Prisma.MovimentacaoEstoqueDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Loja: 'Loja',
    Usuario: 'Usuario',
    Produto: 'Produto',
    Cliente: 'Cliente',
    Orcamento: 'Orcamento',
    ItemOrcamento: 'ItemOrcamento',
    Pagamento: 'Pagamento',
    FluxoCaixa: 'FluxoCaixa',
    MovimentacaoEstoque: 'MovimentacaoEstoque'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "loja" | "usuario" | "produto" | "cliente" | "orcamento" | "itemOrcamento" | "pagamento" | "fluxoCaixa" | "movimentacaoEstoque"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Loja: {
        payload: Prisma.$LojaPayload<ExtArgs>
        fields: Prisma.LojaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LojaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LojaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          findFirst: {
            args: Prisma.LojaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LojaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          findMany: {
            args: Prisma.LojaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>[]
          }
          create: {
            args: Prisma.LojaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          createMany: {
            args: Prisma.LojaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LojaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>[]
          }
          delete: {
            args: Prisma.LojaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          update: {
            args: Prisma.LojaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          deleteMany: {
            args: Prisma.LojaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LojaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LojaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>[]
          }
          upsert: {
            args: Prisma.LojaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          aggregate: {
            args: Prisma.LojaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoja>
          }
          groupBy: {
            args: Prisma.LojaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LojaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LojaCountArgs<ExtArgs>
            result: $Utils.Optional<LojaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Orcamento: {
        payload: Prisma.$OrcamentoPayload<ExtArgs>
        fields: Prisma.OrcamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrcamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrcamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          findFirst: {
            args: Prisma.OrcamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrcamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          findMany: {
            args: Prisma.OrcamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          create: {
            args: Prisma.OrcamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          createMany: {
            args: Prisma.OrcamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrcamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          delete: {
            args: Prisma.OrcamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          update: {
            args: Prisma.OrcamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          deleteMany: {
            args: Prisma.OrcamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrcamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrcamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          upsert: {
            args: Prisma.OrcamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          aggregate: {
            args: Prisma.OrcamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrcamento>
          }
          groupBy: {
            args: Prisma.OrcamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrcamentoCountArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoCountAggregateOutputType> | number
          }
        }
      }
      ItemOrcamento: {
        payload: Prisma.$ItemOrcamentoPayload<ExtArgs>
        fields: Prisma.ItemOrcamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemOrcamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemOrcamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>
          }
          findFirst: {
            args: Prisma.ItemOrcamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemOrcamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>
          }
          findMany: {
            args: Prisma.ItemOrcamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>[]
          }
          create: {
            args: Prisma.ItemOrcamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>
          }
          createMany: {
            args: Prisma.ItemOrcamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemOrcamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>[]
          }
          delete: {
            args: Prisma.ItemOrcamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>
          }
          update: {
            args: Prisma.ItemOrcamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>
          }
          deleteMany: {
            args: Prisma.ItemOrcamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemOrcamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemOrcamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>[]
          }
          upsert: {
            args: Prisma.ItemOrcamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrcamentoPayload>
          }
          aggregate: {
            args: Prisma.ItemOrcamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemOrcamento>
          }
          groupBy: {
            args: Prisma.ItemOrcamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemOrcamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemOrcamentoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemOrcamentoCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      FluxoCaixa: {
        payload: Prisma.$FluxoCaixaPayload<ExtArgs>
        fields: Prisma.FluxoCaixaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FluxoCaixaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FluxoCaixaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          findFirst: {
            args: Prisma.FluxoCaixaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FluxoCaixaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          findMany: {
            args: Prisma.FluxoCaixaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>[]
          }
          create: {
            args: Prisma.FluxoCaixaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          createMany: {
            args: Prisma.FluxoCaixaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FluxoCaixaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>[]
          }
          delete: {
            args: Prisma.FluxoCaixaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          update: {
            args: Prisma.FluxoCaixaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          deleteMany: {
            args: Prisma.FluxoCaixaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FluxoCaixaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FluxoCaixaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>[]
          }
          upsert: {
            args: Prisma.FluxoCaixaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          aggregate: {
            args: Prisma.FluxoCaixaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFluxoCaixa>
          }
          groupBy: {
            args: Prisma.FluxoCaixaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FluxoCaixaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FluxoCaixaCountArgs<ExtArgs>
            result: $Utils.Optional<FluxoCaixaCountAggregateOutputType> | number
          }
        }
      }
      MovimentacaoEstoque: {
        payload: Prisma.$MovimentacaoEstoquePayload<ExtArgs>
        fields: Prisma.MovimentacaoEstoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoEstoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoEstoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoEstoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoEstoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>
          }
          findMany: {
            args: Prisma.MovimentacaoEstoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>[]
          }
          create: {
            args: Prisma.MovimentacaoEstoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>
          }
          createMany: {
            args: Prisma.MovimentacaoEstoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoEstoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoEstoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>
          }
          update: {
            args: Prisma.MovimentacaoEstoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoEstoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoEstoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimentacaoEstoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>[]
          }
          upsert: {
            args: Prisma.MovimentacaoEstoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoEstoquePayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoEstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacaoEstoque>
          }
          groupBy: {
            args: Prisma.MovimentacaoEstoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoEstoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoEstoqueCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoEstoqueCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
  }
  export type GlobalOmitConfig = {
    loja?: LojaOmit
    usuario?: UsuarioOmit
    produto?: ProdutoOmit
    cliente?: ClienteOmit
    orcamento?: OrcamentoOmit
    itemOrcamento?: ItemOrcamentoOmit
    pagamento?: PagamentoOmit
    fluxoCaixa?: FluxoCaixaOmit
    movimentacaoEstoque?: MovimentacaoEstoqueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type LojaCountOutputType
   */

  export type LojaCountOutputType = {
    usuarios: number
    produtos: number
    clientes: number
    orcamentos: number
    pagamentos: number
    movimentacoesFinanceiras: number
    movimentacoesEstoque: number
  }

  export type LojaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | LojaCountOutputTypeCountUsuariosArgs
    produtos?: boolean | LojaCountOutputTypeCountProdutosArgs
    clientes?: boolean | LojaCountOutputTypeCountClientesArgs
    orcamentos?: boolean | LojaCountOutputTypeCountOrcamentosArgs
    pagamentos?: boolean | LojaCountOutputTypeCountPagamentosArgs
    movimentacoesFinanceiras?: boolean | LojaCountOutputTypeCountMovimentacoesFinanceirasArgs
    movimentacoesEstoque?: boolean | LojaCountOutputTypeCountMovimentacoesEstoqueArgs
  }

  // Custom InputTypes
  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LojaCountOutputType
     */
    select?: LojaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeCountOrcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
  }

  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }

  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeCountMovimentacoesFinanceirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FluxoCaixaWhereInput
  }

  /**
   * LojaCountOutputType without action
   */
  export type LojaCountOutputTypeCountMovimentacoesEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoEstoqueWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itensOrcamento: number
    movimentacoes: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensOrcamento?: boolean | ProdutoCountOutputTypeCountItensOrcamentoArgs
    movimentacoes?: boolean | ProdutoCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensOrcamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOrcamentoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoEstoqueWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    orcamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamentos?: boolean | ClienteCountOutputTypeCountOrcamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountOrcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
  }


  /**
   * Count Type OrcamentoCountOutputType
   */

  export type OrcamentoCountOutputType = {
    itens: number
  }

  export type OrcamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | OrcamentoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * OrcamentoCountOutputType without action
   */
  export type OrcamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoCountOutputType
     */
    select?: OrcamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrcamentoCountOutputType without action
   */
  export type OrcamentoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOrcamentoWhereInput
  }


  /**
   * Count Type PagamentoCountOutputType
   */

  export type PagamentoCountOutputType = {
    fluxosCaixa: number
  }

  export type PagamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fluxosCaixa?: boolean | PagamentoCountOutputTypeCountFluxosCaixaArgs
  }

  // Custom InputTypes
  /**
   * PagamentoCountOutputType without action
   */
  export type PagamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoCountOutputType
     */
    select?: PagamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PagamentoCountOutputType without action
   */
  export type PagamentoCountOutputTypeCountFluxosCaixaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FluxoCaixaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Loja
   */

  export type AggregateLoja = {
    _count: LojaCountAggregateOutputType | null
    _min: LojaMinAggregateOutputType | null
    _max: LojaMaxAggregateOutputType | null
  }

  export type LojaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    codigoUrl: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type LojaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    codigoUrl: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type LojaCountAggregateOutputType = {
    id: number
    nome: number
    codigoUrl: number
    dataCriacao: number
    dataAtualizacao: number
    configuracoes: number
    _all: number
  }


  export type LojaMinAggregateInputType = {
    id?: true
    nome?: true
    codigoUrl?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type LojaMaxAggregateInputType = {
    id?: true
    nome?: true
    codigoUrl?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type LojaCountAggregateInputType = {
    id?: true
    nome?: true
    codigoUrl?: true
    dataCriacao?: true
    dataAtualizacao?: true
    configuracoes?: true
    _all?: true
  }

  export type LojaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loja to aggregate.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lojas
    **/
    _count?: true | LojaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LojaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LojaMaxAggregateInputType
  }

  export type GetLojaAggregateType<T extends LojaAggregateArgs> = {
        [P in keyof T & keyof AggregateLoja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoja[P]>
      : GetScalarType<T[P], AggregateLoja[P]>
  }




  export type LojaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LojaWhereInput
    orderBy?: LojaOrderByWithAggregationInput | LojaOrderByWithAggregationInput[]
    by: LojaScalarFieldEnum[] | LojaScalarFieldEnum
    having?: LojaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LojaCountAggregateInputType | true
    _min?: LojaMinAggregateInputType
    _max?: LojaMaxAggregateInputType
  }

  export type LojaGroupByOutputType = {
    id: string
    nome: string
    codigoUrl: string
    dataCriacao: Date
    dataAtualizacao: Date
    configuracoes: JsonValue | null
    _count: LojaCountAggregateOutputType | null
    _min: LojaMinAggregateOutputType | null
    _max: LojaMaxAggregateOutputType | null
  }

  type GetLojaGroupByPayload<T extends LojaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LojaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LojaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LojaGroupByOutputType[P]>
            : GetScalarType<T[P], LojaGroupByOutputType[P]>
        }
      >
    >


  export type LojaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigoUrl?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    configuracoes?: boolean
    usuarios?: boolean | Loja$usuariosArgs<ExtArgs>
    produtos?: boolean | Loja$produtosArgs<ExtArgs>
    clientes?: boolean | Loja$clientesArgs<ExtArgs>
    orcamentos?: boolean | Loja$orcamentosArgs<ExtArgs>
    pagamentos?: boolean | Loja$pagamentosArgs<ExtArgs>
    movimentacoesFinanceiras?: boolean | Loja$movimentacoesFinanceirasArgs<ExtArgs>
    movimentacoesEstoque?: boolean | Loja$movimentacoesEstoqueArgs<ExtArgs>
    _count?: boolean | LojaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loja"]>

  export type LojaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigoUrl?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    configuracoes?: boolean
  }, ExtArgs["result"]["loja"]>

  export type LojaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigoUrl?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    configuracoes?: boolean
  }, ExtArgs["result"]["loja"]>

  export type LojaSelectScalar = {
    id?: boolean
    nome?: boolean
    codigoUrl?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    configuracoes?: boolean
  }

  export type LojaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "codigoUrl" | "dataCriacao" | "dataAtualizacao" | "configuracoes", ExtArgs["result"]["loja"]>
  export type LojaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Loja$usuariosArgs<ExtArgs>
    produtos?: boolean | Loja$produtosArgs<ExtArgs>
    clientes?: boolean | Loja$clientesArgs<ExtArgs>
    orcamentos?: boolean | Loja$orcamentosArgs<ExtArgs>
    pagamentos?: boolean | Loja$pagamentosArgs<ExtArgs>
    movimentacoesFinanceiras?: boolean | Loja$movimentacoesFinanceirasArgs<ExtArgs>
    movimentacoesEstoque?: boolean | Loja$movimentacoesEstoqueArgs<ExtArgs>
    _count?: boolean | LojaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LojaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LojaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LojaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loja"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      clientes: Prisma.$ClientePayload<ExtArgs>[]
      orcamentos: Prisma.$OrcamentoPayload<ExtArgs>[]
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
      movimentacoesFinanceiras: Prisma.$FluxoCaixaPayload<ExtArgs>[]
      movimentacoesEstoque: Prisma.$MovimentacaoEstoquePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      codigoUrl: string
      dataCriacao: Date
      dataAtualizacao: Date
      configuracoes: Prisma.JsonValue | null
    }, ExtArgs["result"]["loja"]>
    composites: {}
  }

  type LojaGetPayload<S extends boolean | null | undefined | LojaDefaultArgs> = $Result.GetResult<Prisma.$LojaPayload, S>

  type LojaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LojaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LojaCountAggregateInputType | true
    }

  export interface LojaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loja'], meta: { name: 'Loja' } }
    /**
     * Find zero or one Loja that matches the filter.
     * @param {LojaFindUniqueArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LojaFindUniqueArgs>(args: SelectSubset<T, LojaFindUniqueArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LojaFindUniqueOrThrowArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LojaFindUniqueOrThrowArgs>(args: SelectSubset<T, LojaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaFindFirstArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LojaFindFirstArgs>(args?: SelectSubset<T, LojaFindFirstArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaFindFirstOrThrowArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LojaFindFirstOrThrowArgs>(args?: SelectSubset<T, LojaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lojas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lojas
     * const lojas = await prisma.loja.findMany()
     * 
     * // Get first 10 Lojas
     * const lojas = await prisma.loja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lojaWithIdOnly = await prisma.loja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LojaFindManyArgs>(args?: SelectSubset<T, LojaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loja.
     * @param {LojaCreateArgs} args - Arguments to create a Loja.
     * @example
     * // Create one Loja
     * const Loja = await prisma.loja.create({
     *   data: {
     *     // ... data to create a Loja
     *   }
     * })
     * 
     */
    create<T extends LojaCreateArgs>(args: SelectSubset<T, LojaCreateArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lojas.
     * @param {LojaCreateManyArgs} args - Arguments to create many Lojas.
     * @example
     * // Create many Lojas
     * const loja = await prisma.loja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LojaCreateManyArgs>(args?: SelectSubset<T, LojaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lojas and returns the data saved in the database.
     * @param {LojaCreateManyAndReturnArgs} args - Arguments to create many Lojas.
     * @example
     * // Create many Lojas
     * const loja = await prisma.loja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lojas and only return the `id`
     * const lojaWithIdOnly = await prisma.loja.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LojaCreateManyAndReturnArgs>(args?: SelectSubset<T, LojaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loja.
     * @param {LojaDeleteArgs} args - Arguments to delete one Loja.
     * @example
     * // Delete one Loja
     * const Loja = await prisma.loja.delete({
     *   where: {
     *     // ... filter to delete one Loja
     *   }
     * })
     * 
     */
    delete<T extends LojaDeleteArgs>(args: SelectSubset<T, LojaDeleteArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loja.
     * @param {LojaUpdateArgs} args - Arguments to update one Loja.
     * @example
     * // Update one Loja
     * const loja = await prisma.loja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LojaUpdateArgs>(args: SelectSubset<T, LojaUpdateArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lojas.
     * @param {LojaDeleteManyArgs} args - Arguments to filter Lojas to delete.
     * @example
     * // Delete a few Lojas
     * const { count } = await prisma.loja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LojaDeleteManyArgs>(args?: SelectSubset<T, LojaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lojas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lojas
     * const loja = await prisma.loja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LojaUpdateManyArgs>(args: SelectSubset<T, LojaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lojas and returns the data updated in the database.
     * @param {LojaUpdateManyAndReturnArgs} args - Arguments to update many Lojas.
     * @example
     * // Update many Lojas
     * const loja = await prisma.loja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lojas and only return the `id`
     * const lojaWithIdOnly = await prisma.loja.updateManyAndReturn({
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
    updateManyAndReturn<T extends LojaUpdateManyAndReturnArgs>(args: SelectSubset<T, LojaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loja.
     * @param {LojaUpsertArgs} args - Arguments to update or create a Loja.
     * @example
     * // Update or create a Loja
     * const loja = await prisma.loja.upsert({
     *   create: {
     *     // ... data to create a Loja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loja we want to update
     *   }
     * })
     */
    upsert<T extends LojaUpsertArgs>(args: SelectSubset<T, LojaUpsertArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lojas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaCountArgs} args - Arguments to filter Lojas to count.
     * @example
     * // Count the number of Lojas
     * const count = await prisma.loja.count({
     *   where: {
     *     // ... the filter for the Lojas we want to count
     *   }
     * })
    **/
    count<T extends LojaCountArgs>(
      args?: Subset<T, LojaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LojaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LojaAggregateArgs>(args: Subset<T, LojaAggregateArgs>): Prisma.PrismaPromise<GetLojaAggregateType<T>>

    /**
     * Group by Loja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaGroupByArgs} args - Group by arguments.
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
      T extends LojaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LojaGroupByArgs['orderBy'] }
        : { orderBy?: LojaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LojaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLojaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loja model
   */
  readonly fields: LojaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LojaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Loja$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Loja$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produtos<T extends Loja$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Loja$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends Loja$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Loja$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orcamentos<T extends Loja$orcamentosArgs<ExtArgs> = {}>(args?: Subset<T, Loja$orcamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends Loja$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Loja$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoesFinanceiras<T extends Loja$movimentacoesFinanceirasArgs<ExtArgs> = {}>(args?: Subset<T, Loja$movimentacoesFinanceirasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoesEstoque<T extends Loja$movimentacoesEstoqueArgs<ExtArgs> = {}>(args?: Subset<T, Loja$movimentacoesEstoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Loja model
   */
  interface LojaFieldRefs {
    readonly id: FieldRef<"Loja", 'String'>
    readonly nome: FieldRef<"Loja", 'String'>
    readonly codigoUrl: FieldRef<"Loja", 'String'>
    readonly dataCriacao: FieldRef<"Loja", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Loja", 'DateTime'>
    readonly configuracoes: FieldRef<"Loja", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Loja findUnique
   */
  export type LojaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja findUniqueOrThrow
   */
  export type LojaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja findFirst
   */
  export type LojaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lojas.
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lojas.
     */
    distinct?: LojaScalarFieldEnum | LojaScalarFieldEnum[]
  }

  /**
   * Loja findFirstOrThrow
   */
  export type LojaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lojas.
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lojas.
     */
    distinct?: LojaScalarFieldEnum | LojaScalarFieldEnum[]
  }

  /**
   * Loja findMany
   */
  export type LojaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Lojas to fetch.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lojas.
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    distinct?: LojaScalarFieldEnum | LojaScalarFieldEnum[]
  }

  /**
   * Loja create
   */
  export type LojaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * The data needed to create a Loja.
     */
    data: XOR<LojaCreateInput, LojaUncheckedCreateInput>
  }

  /**
   * Loja createMany
   */
  export type LojaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lojas.
     */
    data: LojaCreateManyInput | LojaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loja createManyAndReturn
   */
  export type LojaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * The data used to create many Lojas.
     */
    data: LojaCreateManyInput | LojaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loja update
   */
  export type LojaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * The data needed to update a Loja.
     */
    data: XOR<LojaUpdateInput, LojaUncheckedUpdateInput>
    /**
     * Choose, which Loja to update.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja updateMany
   */
  export type LojaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lojas.
     */
    data: XOR<LojaUpdateManyMutationInput, LojaUncheckedUpdateManyInput>
    /**
     * Filter which Lojas to update
     */
    where?: LojaWhereInput
    /**
     * Limit how many Lojas to update.
     */
    limit?: number
  }

  /**
   * Loja updateManyAndReturn
   */
  export type LojaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * The data used to update Lojas.
     */
    data: XOR<LojaUpdateManyMutationInput, LojaUncheckedUpdateManyInput>
    /**
     * Filter which Lojas to update
     */
    where?: LojaWhereInput
    /**
     * Limit how many Lojas to update.
     */
    limit?: number
  }

  /**
   * Loja upsert
   */
  export type LojaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * The filter to search for the Loja to update in case it exists.
     */
    where: LojaWhereUniqueInput
    /**
     * In case the Loja found by the `where` argument doesn't exist, create a new Loja with this data.
     */
    create: XOR<LojaCreateInput, LojaUncheckedCreateInput>
    /**
     * In case the Loja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LojaUpdateInput, LojaUncheckedUpdateInput>
  }

  /**
   * Loja delete
   */
  export type LojaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter which Loja to delete.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja deleteMany
   */
  export type LojaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lojas to delete
     */
    where?: LojaWhereInput
    /**
     * Limit how many Lojas to delete.
     */
    limit?: number
  }

  /**
   * Loja.usuarios
   */
  export type Loja$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Loja.produtos
   */
  export type Loja$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Loja.clientes
   */
  export type Loja$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Loja.orcamentos
   */
  export type Loja$orcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    cursor?: OrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Loja.pagamentos
   */
  export type Loja$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Loja.movimentacoesFinanceiras
   */
  export type Loja$movimentacoesFinanceirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    where?: FluxoCaixaWhereInput
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    cursor?: FluxoCaixaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * Loja.movimentacoesEstoque
   */
  export type Loja$movimentacoesEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    where?: MovimentacaoEstoqueWhereInput
    orderBy?: MovimentacaoEstoqueOrderByWithRelationInput | MovimentacaoEstoqueOrderByWithRelationInput[]
    cursor?: MovimentacaoEstoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoEstoqueScalarFieldEnum | MovimentacaoEstoqueScalarFieldEnum[]
  }

  /**
   * Loja without action
   */
  export type LojaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loja
     */
    omit?: LojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    nome: string | null
    perfil: $Enums.PerfilUsuario | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    ultimoLogin: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    nome: string | null
    perfil: $Enums.PerfilUsuario | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    ultimoLogin: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    nome: number
    perfil: number
    lojaId: number
    dataCriacao: number
    dataAtualizacao: number
    ultimoLogin: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    perfil?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    ultimoLogin?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    perfil?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    ultimoLogin?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    perfil?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    ultimoLogin?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    senha: string
    nome: string | null
    perfil: $Enums.PerfilUsuario
    lojaId: string
    dataCriacao: Date
    dataAtualizacao: Date
    ultimoLogin: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    perfil?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    ultimoLogin?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    perfil?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    ultimoLogin?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    perfil?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    ultimoLogin?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    perfil?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    ultimoLogin?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha" | "nome" | "perfil" | "lojaId" | "dataCriacao" | "dataAtualizacao" | "ultimoLogin", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      loja: Prisma.$LojaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      senha: string
      nome: string | null
      perfil: $Enums.PerfilUsuario
      lojaId: string
      dataCriacao: Date
      dataAtualizacao: Date
      ultimoLogin: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loja<T extends LojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LojaDefaultArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly perfil: FieldRef<"Usuario", 'PerfilUsuario'>
    readonly lojaId: FieldRef<"Usuario", 'String'>
    readonly dataCriacao: FieldRef<"Usuario", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Usuario", 'DateTime'>
    readonly ultimoLogin: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    quantidade: number | null
    precoCusto: number | null
    precoVenda: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    quantidade: number | null
    precoCusto: number | null
    precoVenda: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    codigoBarras: string | null
    quantidade: number | null
    precoCusto: number | null
    precoVenda: number | null
    categoria: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    codigoBarras: string | null
    quantidade: number | null
    precoCusto: number | null
    precoVenda: number | null
    categoria: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    codigoBarras: number
    quantidade: number
    precoCusto: number
    precoVenda: number
    categoria: number
    lojaId: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    quantidade?: true
    precoCusto?: true
    precoVenda?: true
  }

  export type ProdutoSumAggregateInputType = {
    quantidade?: true
    precoCusto?: true
    precoVenda?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    codigoBarras?: true
    quantidade?: true
    precoCusto?: true
    precoVenda?: true
    categoria?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    codigoBarras?: true
    quantidade?: true
    precoCusto?: true
    precoVenda?: true
    categoria?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    codigoBarras?: true
    quantidade?: true
    precoCusto?: true
    precoVenda?: true
    categoria?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    codigoBarras: string | null
    quantidade: number
    precoCusto: number
    precoVenda: number
    categoria: string | null
    lojaId: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigoBarras?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    precoVenda?: boolean
    categoria?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    itensOrcamento?: boolean | Produto$itensOrcamentoArgs<ExtArgs>
    movimentacoes?: boolean | Produto$movimentacoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigoBarras?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    precoVenda?: boolean
    categoria?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigoBarras?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    precoVenda?: boolean
    categoria?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    codigoBarras?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    precoVenda?: boolean
    categoria?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "codigoBarras" | "quantidade" | "precoCusto" | "precoVenda" | "categoria" | "lojaId" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    itensOrcamento?: boolean | Produto$itensOrcamentoArgs<ExtArgs>
    movimentacoes?: boolean | Produto$movimentacoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      loja: Prisma.$LojaPayload<ExtArgs>
      itensOrcamento: Prisma.$ItemOrcamentoPayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoEstoquePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      codigoBarras: string | null
      quantidade: number
      precoCusto: number
      precoVenda: number
      categoria: string | null
      lojaId: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loja<T extends LojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LojaDefaultArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensOrcamento<T extends Produto$itensOrcamentoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensOrcamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends Produto$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Produto$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'String'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly codigoBarras: FieldRef<"Produto", 'String'>
    readonly quantidade: FieldRef<"Produto", 'Int'>
    readonly precoCusto: FieldRef<"Produto", 'Float'>
    readonly precoVenda: FieldRef<"Produto", 'Float'>
    readonly categoria: FieldRef<"Produto", 'String'>
    readonly lojaId: FieldRef<"Produto", 'String'>
    readonly dataCriacao: FieldRef<"Produto", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Produto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.itensOrcamento
   */
  export type Produto$itensOrcamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    where?: ItemOrcamentoWhereInput
    orderBy?: ItemOrcamentoOrderByWithRelationInput | ItemOrcamentoOrderByWithRelationInput[]
    cursor?: ItemOrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOrcamentoScalarFieldEnum | ItemOrcamentoScalarFieldEnum[]
  }

  /**
   * Produto.movimentacoes
   */
  export type Produto$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    where?: MovimentacaoEstoqueWhereInput
    orderBy?: MovimentacaoEstoqueOrderByWithRelationInput | MovimentacaoEstoqueOrderByWithRelationInput[]
    cursor?: MovimentacaoEstoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoEstoqueScalarFieldEnum | MovimentacaoEstoqueScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    documento: string | null
    endereco: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    documento: string | null
    endereco: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    documento: number
    endereco: number
    lojaId: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    documento?: true
    endereco?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    documento?: true
    endereco?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    documento?: true
    endereco?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    email: string | null
    telefone: string
    documento: string | null
    endereco: string | null
    lojaId: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    endereco?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    orcamentos?: boolean | Cliente$orcamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    endereco?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    endereco?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    endereco?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "documento" | "endereco" | "lojaId" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    orcamentos?: boolean | Cliente$orcamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      loja: Prisma.$LojaPayload<ExtArgs>
      orcamentos: Prisma.$OrcamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string | null
      telefone: string
      documento: string | null
      endereco: string | null
      lojaId: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loja<T extends LojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LojaDefaultArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orcamentos<T extends Cliente$orcamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$orcamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly documento: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly lojaId: FieldRef<"Cliente", 'String'>
    readonly dataCriacao: FieldRef<"Cliente", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.orcamentos
   */
  export type Cliente$orcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    cursor?: OrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Orcamento
   */

  export type AggregateOrcamento = {
    _count: OrcamentoCountAggregateOutputType | null
    _avg: OrcamentoAvgAggregateOutputType | null
    _sum: OrcamentoSumAggregateOutputType | null
    _min: OrcamentoMinAggregateOutputType | null
    _max: OrcamentoMaxAggregateOutputType | null
  }

  export type OrcamentoAvgAggregateOutputType = {
    desconto: number | null
    valorTotal: number | null
  }

  export type OrcamentoSumAggregateOutputType = {
    desconto: number | null
    valorTotal: number | null
  }

  export type OrcamentoMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    clienteId: string | null
    desconto: number | null
    valorTotal: number | null
    observacoes: string | null
    status: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type OrcamentoMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    clienteId: string | null
    desconto: number | null
    valorTotal: number | null
    observacoes: string | null
    status: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type OrcamentoCountAggregateOutputType = {
    id: number
    codigo: number
    clienteId: number
    desconto: number
    valorTotal: number
    observacoes: number
    status: number
    lojaId: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type OrcamentoAvgAggregateInputType = {
    desconto?: true
    valorTotal?: true
  }

  export type OrcamentoSumAggregateInputType = {
    desconto?: true
    valorTotal?: true
  }

  export type OrcamentoMinAggregateInputType = {
    id?: true
    codigo?: true
    clienteId?: true
    desconto?: true
    valorTotal?: true
    observacoes?: true
    status?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type OrcamentoMaxAggregateInputType = {
    id?: true
    codigo?: true
    clienteId?: true
    desconto?: true
    valorTotal?: true
    observacoes?: true
    status?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type OrcamentoCountAggregateInputType = {
    id?: true
    codigo?: true
    clienteId?: true
    desconto?: true
    valorTotal?: true
    observacoes?: true
    status?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type OrcamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcamento to aggregate.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orcamentos
    **/
    _count?: true | OrcamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrcamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrcamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrcamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrcamentoMaxAggregateInputType
  }

  export type GetOrcamentoAggregateType<T extends OrcamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrcamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrcamento[P]>
      : GetScalarType<T[P], AggregateOrcamento[P]>
  }




  export type OrcamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithAggregationInput | OrcamentoOrderByWithAggregationInput[]
    by: OrcamentoScalarFieldEnum[] | OrcamentoScalarFieldEnum
    having?: OrcamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrcamentoCountAggregateInputType | true
    _avg?: OrcamentoAvgAggregateInputType
    _sum?: OrcamentoSumAggregateInputType
    _min?: OrcamentoMinAggregateInputType
    _max?: OrcamentoMaxAggregateInputType
  }

  export type OrcamentoGroupByOutputType = {
    id: string
    codigo: string
    clienteId: string
    desconto: number
    valorTotal: number
    observacoes: string | null
    status: string
    lojaId: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: OrcamentoCountAggregateOutputType | null
    _avg: OrcamentoAvgAggregateOutputType | null
    _sum: OrcamentoSumAggregateOutputType | null
    _min: OrcamentoMinAggregateOutputType | null
    _max: OrcamentoMaxAggregateOutputType | null
  }

  type GetOrcamentoGroupByPayload<T extends OrcamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrcamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrcamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrcamentoGroupByOutputType[P]>
            : GetScalarType<T[P], OrcamentoGroupByOutputType[P]>
        }
      >
    >


  export type OrcamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    clienteId?: boolean
    desconto?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    status?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Orcamento$itensArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    pagamento?: boolean | Orcamento$pagamentoArgs<ExtArgs>
    _count?: boolean | OrcamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    clienteId?: boolean
    desconto?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    status?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    clienteId?: boolean
    desconto?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    status?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectScalar = {
    id?: boolean
    codigo?: boolean
    clienteId?: boolean
    desconto?: boolean
    valorTotal?: boolean
    observacoes?: boolean
    status?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type OrcamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "clienteId" | "desconto" | "valorTotal" | "observacoes" | "status" | "lojaId" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["orcamento"]>
  export type OrcamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Orcamento$itensArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    pagamento?: boolean | Orcamento$pagamentoArgs<ExtArgs>
    _count?: boolean | OrcamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrcamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type OrcamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }

  export type $OrcamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orcamento"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      itens: Prisma.$ItemOrcamentoPayload<ExtArgs>[]
      loja: Prisma.$LojaPayload<ExtArgs>
      pagamento: Prisma.$PagamentoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      clienteId: string
      desconto: number
      valorTotal: number
      observacoes: string | null
      status: string
      lojaId: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["orcamento"]>
    composites: {}
  }

  type OrcamentoGetPayload<S extends boolean | null | undefined | OrcamentoDefaultArgs> = $Result.GetResult<Prisma.$OrcamentoPayload, S>

  type OrcamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrcamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrcamentoCountAggregateInputType | true
    }

  export interface OrcamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orcamento'], meta: { name: 'Orcamento' } }
    /**
     * Find zero or one Orcamento that matches the filter.
     * @param {OrcamentoFindUniqueArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrcamentoFindUniqueArgs>(args: SelectSubset<T, OrcamentoFindUniqueArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orcamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrcamentoFindUniqueOrThrowArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrcamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrcamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindFirstArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrcamentoFindFirstArgs>(args?: SelectSubset<T, OrcamentoFindFirstArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindFirstOrThrowArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrcamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrcamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orcamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orcamentos
     * const orcamentos = await prisma.orcamento.findMany()
     * 
     * // Get first 10 Orcamentos
     * const orcamentos = await prisma.orcamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrcamentoFindManyArgs>(args?: SelectSubset<T, OrcamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orcamento.
     * @param {OrcamentoCreateArgs} args - Arguments to create a Orcamento.
     * @example
     * // Create one Orcamento
     * const Orcamento = await prisma.orcamento.create({
     *   data: {
     *     // ... data to create a Orcamento
     *   }
     * })
     * 
     */
    create<T extends OrcamentoCreateArgs>(args: SelectSubset<T, OrcamentoCreateArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orcamentos.
     * @param {OrcamentoCreateManyArgs} args - Arguments to create many Orcamentos.
     * @example
     * // Create many Orcamentos
     * const orcamento = await prisma.orcamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrcamentoCreateManyArgs>(args?: SelectSubset<T, OrcamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orcamentos and returns the data saved in the database.
     * @param {OrcamentoCreateManyAndReturnArgs} args - Arguments to create many Orcamentos.
     * @example
     * // Create many Orcamentos
     * const orcamento = await prisma.orcamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orcamentos and only return the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrcamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrcamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orcamento.
     * @param {OrcamentoDeleteArgs} args - Arguments to delete one Orcamento.
     * @example
     * // Delete one Orcamento
     * const Orcamento = await prisma.orcamento.delete({
     *   where: {
     *     // ... filter to delete one Orcamento
     *   }
     * })
     * 
     */
    delete<T extends OrcamentoDeleteArgs>(args: SelectSubset<T, OrcamentoDeleteArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orcamento.
     * @param {OrcamentoUpdateArgs} args - Arguments to update one Orcamento.
     * @example
     * // Update one Orcamento
     * const orcamento = await prisma.orcamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrcamentoUpdateArgs>(args: SelectSubset<T, OrcamentoUpdateArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orcamentos.
     * @param {OrcamentoDeleteManyArgs} args - Arguments to filter Orcamentos to delete.
     * @example
     * // Delete a few Orcamentos
     * const { count } = await prisma.orcamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrcamentoDeleteManyArgs>(args?: SelectSubset<T, OrcamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orcamentos
     * const orcamento = await prisma.orcamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrcamentoUpdateManyArgs>(args: SelectSubset<T, OrcamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcamentos and returns the data updated in the database.
     * @param {OrcamentoUpdateManyAndReturnArgs} args - Arguments to update many Orcamentos.
     * @example
     * // Update many Orcamentos
     * const orcamento = await prisma.orcamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orcamentos and only return the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrcamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, OrcamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orcamento.
     * @param {OrcamentoUpsertArgs} args - Arguments to update or create a Orcamento.
     * @example
     * // Update or create a Orcamento
     * const orcamento = await prisma.orcamento.upsert({
     *   create: {
     *     // ... data to create a Orcamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orcamento we want to update
     *   }
     * })
     */
    upsert<T extends OrcamentoUpsertArgs>(args: SelectSubset<T, OrcamentoUpsertArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoCountArgs} args - Arguments to filter Orcamentos to count.
     * @example
     * // Count the number of Orcamentos
     * const count = await prisma.orcamento.count({
     *   where: {
     *     // ... the filter for the Orcamentos we want to count
     *   }
     * })
    **/
    count<T extends OrcamentoCountArgs>(
      args?: Subset<T, OrcamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrcamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrcamentoAggregateArgs>(args: Subset<T, OrcamentoAggregateArgs>): Prisma.PrismaPromise<GetOrcamentoAggregateType<T>>

    /**
     * Group by Orcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoGroupByArgs} args - Group by arguments.
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
      T extends OrcamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrcamentoGroupByArgs['orderBy'] }
        : { orderBy?: OrcamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrcamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrcamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orcamento model
   */
  readonly fields: OrcamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orcamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrcamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Orcamento$itensArgs<ExtArgs> = {}>(args?: Subset<T, Orcamento$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loja<T extends LojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LojaDefaultArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pagamento<T extends Orcamento$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, Orcamento$pagamentoArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orcamento model
   */
  interface OrcamentoFieldRefs {
    readonly id: FieldRef<"Orcamento", 'String'>
    readonly codigo: FieldRef<"Orcamento", 'String'>
    readonly clienteId: FieldRef<"Orcamento", 'String'>
    readonly desconto: FieldRef<"Orcamento", 'Float'>
    readonly valorTotal: FieldRef<"Orcamento", 'Float'>
    readonly observacoes: FieldRef<"Orcamento", 'String'>
    readonly status: FieldRef<"Orcamento", 'String'>
    readonly lojaId: FieldRef<"Orcamento", 'String'>
    readonly dataCriacao: FieldRef<"Orcamento", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Orcamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orcamento findUnique
   */
  export type OrcamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento findUniqueOrThrow
   */
  export type OrcamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento findFirst
   */
  export type OrcamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcamentos.
     */
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento findFirstOrThrow
   */
  export type OrcamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcamentos.
     */
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento findMany
   */
  export type OrcamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamentos to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento create
   */
  export type OrcamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Orcamento.
     */
    data: XOR<OrcamentoCreateInput, OrcamentoUncheckedCreateInput>
  }

  /**
   * Orcamento createMany
   */
  export type OrcamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orcamentos.
     */
    data: OrcamentoCreateManyInput | OrcamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orcamento createManyAndReturn
   */
  export type OrcamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Orcamentos.
     */
    data: OrcamentoCreateManyInput | OrcamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcamento update
   */
  export type OrcamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Orcamento.
     */
    data: XOR<OrcamentoUpdateInput, OrcamentoUncheckedUpdateInput>
    /**
     * Choose, which Orcamento to update.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento updateMany
   */
  export type OrcamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orcamentos.
     */
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which Orcamentos to update
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to update.
     */
    limit?: number
  }

  /**
   * Orcamento updateManyAndReturn
   */
  export type OrcamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * The data used to update Orcamentos.
     */
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which Orcamentos to update
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcamento upsert
   */
  export type OrcamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Orcamento to update in case it exists.
     */
    where: OrcamentoWhereUniqueInput
    /**
     * In case the Orcamento found by the `where` argument doesn't exist, create a new Orcamento with this data.
     */
    create: XOR<OrcamentoCreateInput, OrcamentoUncheckedCreateInput>
    /**
     * In case the Orcamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrcamentoUpdateInput, OrcamentoUncheckedUpdateInput>
  }

  /**
   * Orcamento delete
   */
  export type OrcamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter which Orcamento to delete.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento deleteMany
   */
  export type OrcamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcamentos to delete
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to delete.
     */
    limit?: number
  }

  /**
   * Orcamento.itens
   */
  export type Orcamento$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    where?: ItemOrcamentoWhereInput
    orderBy?: ItemOrcamentoOrderByWithRelationInput | ItemOrcamentoOrderByWithRelationInput[]
    cursor?: ItemOrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOrcamentoScalarFieldEnum | ItemOrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento.pagamento
   */
  export type Orcamento$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
  }

  /**
   * Orcamento without action
   */
  export type OrcamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
  }


  /**
   * Model ItemOrcamento
   */

  export type AggregateItemOrcamento = {
    _count: ItemOrcamentoCountAggregateOutputType | null
    _avg: ItemOrcamentoAvgAggregateOutputType | null
    _sum: ItemOrcamentoSumAggregateOutputType | null
    _min: ItemOrcamentoMinAggregateOutputType | null
    _max: ItemOrcamentoMaxAggregateOutputType | null
  }

  export type ItemOrcamentoAvgAggregateOutputType = {
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    total: number | null
  }

  export type ItemOrcamentoSumAggregateOutputType = {
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    total: number | null
  }

  export type ItemOrcamentoMinAggregateOutputType = {
    id: string | null
    orcamentoId: string | null
    produtoId: string | null
    servico: string | null
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    total: number | null
  }

  export type ItemOrcamentoMaxAggregateOutputType = {
    id: string | null
    orcamentoId: string | null
    produtoId: string | null
    servico: string | null
    quantidade: number | null
    precoUnitario: number | null
    desconto: number | null
    total: number | null
  }

  export type ItemOrcamentoCountAggregateOutputType = {
    id: number
    orcamentoId: number
    produtoId: number
    servico: number
    quantidade: number
    precoUnitario: number
    desconto: number
    total: number
    _all: number
  }


  export type ItemOrcamentoAvgAggregateInputType = {
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    total?: true
  }

  export type ItemOrcamentoSumAggregateInputType = {
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    total?: true
  }

  export type ItemOrcamentoMinAggregateInputType = {
    id?: true
    orcamentoId?: true
    produtoId?: true
    servico?: true
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    total?: true
  }

  export type ItemOrcamentoMaxAggregateInputType = {
    id?: true
    orcamentoId?: true
    produtoId?: true
    servico?: true
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    total?: true
  }

  export type ItemOrcamentoCountAggregateInputType = {
    id?: true
    orcamentoId?: true
    produtoId?: true
    servico?: true
    quantidade?: true
    precoUnitario?: true
    desconto?: true
    total?: true
    _all?: true
  }

  export type ItemOrcamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOrcamento to aggregate.
     */
    where?: ItemOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrcamentos to fetch.
     */
    orderBy?: ItemOrcamentoOrderByWithRelationInput | ItemOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemOrcamentos
    **/
    _count?: true | ItemOrcamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemOrcamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemOrcamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemOrcamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemOrcamentoMaxAggregateInputType
  }

  export type GetItemOrcamentoAggregateType<T extends ItemOrcamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemOrcamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemOrcamento[P]>
      : GetScalarType<T[P], AggregateItemOrcamento[P]>
  }




  export type ItemOrcamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOrcamentoWhereInput
    orderBy?: ItemOrcamentoOrderByWithAggregationInput | ItemOrcamentoOrderByWithAggregationInput[]
    by: ItemOrcamentoScalarFieldEnum[] | ItemOrcamentoScalarFieldEnum
    having?: ItemOrcamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemOrcamentoCountAggregateInputType | true
    _avg?: ItemOrcamentoAvgAggregateInputType
    _sum?: ItemOrcamentoSumAggregateInputType
    _min?: ItemOrcamentoMinAggregateInputType
    _max?: ItemOrcamentoMaxAggregateInputType
  }

  export type ItemOrcamentoGroupByOutputType = {
    id: string
    orcamentoId: string
    produtoId: string | null
    servico: string | null
    quantidade: number
    precoUnitario: number
    desconto: number
    total: number
    _count: ItemOrcamentoCountAggregateOutputType | null
    _avg: ItemOrcamentoAvgAggregateOutputType | null
    _sum: ItemOrcamentoSumAggregateOutputType | null
    _min: ItemOrcamentoMinAggregateOutputType | null
    _max: ItemOrcamentoMaxAggregateOutputType | null
  }

  type GetItemOrcamentoGroupByPayload<T extends ItemOrcamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemOrcamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemOrcamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemOrcamentoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemOrcamentoGroupByOutputType[P]>
        }
      >
    >


  export type ItemOrcamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamentoId?: boolean
    produtoId?: boolean
    servico?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    desconto?: boolean
    total?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    produto?: boolean | ItemOrcamento$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["itemOrcamento"]>

  export type ItemOrcamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamentoId?: boolean
    produtoId?: boolean
    servico?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    desconto?: boolean
    total?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    produto?: boolean | ItemOrcamento$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["itemOrcamento"]>

  export type ItemOrcamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamentoId?: boolean
    produtoId?: boolean
    servico?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    desconto?: boolean
    total?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    produto?: boolean | ItemOrcamento$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["itemOrcamento"]>

  export type ItemOrcamentoSelectScalar = {
    id?: boolean
    orcamentoId?: boolean
    produtoId?: boolean
    servico?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    desconto?: boolean
    total?: boolean
  }

  export type ItemOrcamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orcamentoId" | "produtoId" | "servico" | "quantidade" | "precoUnitario" | "desconto" | "total", ExtArgs["result"]["itemOrcamento"]>
  export type ItemOrcamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    produto?: boolean | ItemOrcamento$produtoArgs<ExtArgs>
  }
  export type ItemOrcamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    produto?: boolean | ItemOrcamento$produtoArgs<ExtArgs>
  }
  export type ItemOrcamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    produto?: boolean | ItemOrcamento$produtoArgs<ExtArgs>
  }

  export type $ItemOrcamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemOrcamento"
    objects: {
      orcamento: Prisma.$OrcamentoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orcamentoId: string
      produtoId: string | null
      servico: string | null
      quantidade: number
      precoUnitario: number
      desconto: number
      total: number
    }, ExtArgs["result"]["itemOrcamento"]>
    composites: {}
  }

  type ItemOrcamentoGetPayload<S extends boolean | null | undefined | ItemOrcamentoDefaultArgs> = $Result.GetResult<Prisma.$ItemOrcamentoPayload, S>

  type ItemOrcamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemOrcamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemOrcamentoCountAggregateInputType | true
    }

  export interface ItemOrcamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemOrcamento'], meta: { name: 'ItemOrcamento' } }
    /**
     * Find zero or one ItemOrcamento that matches the filter.
     * @param {ItemOrcamentoFindUniqueArgs} args - Arguments to find a ItemOrcamento
     * @example
     * // Get one ItemOrcamento
     * const itemOrcamento = await prisma.itemOrcamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemOrcamentoFindUniqueArgs>(args: SelectSubset<T, ItemOrcamentoFindUniqueArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemOrcamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemOrcamentoFindUniqueOrThrowArgs} args - Arguments to find a ItemOrcamento
     * @example
     * // Get one ItemOrcamento
     * const itemOrcamento = await prisma.itemOrcamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemOrcamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemOrcamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOrcamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrcamentoFindFirstArgs} args - Arguments to find a ItemOrcamento
     * @example
     * // Get one ItemOrcamento
     * const itemOrcamento = await prisma.itemOrcamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemOrcamentoFindFirstArgs>(args?: SelectSubset<T, ItemOrcamentoFindFirstArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOrcamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrcamentoFindFirstOrThrowArgs} args - Arguments to find a ItemOrcamento
     * @example
     * // Get one ItemOrcamento
     * const itemOrcamento = await prisma.itemOrcamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemOrcamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemOrcamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemOrcamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrcamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemOrcamentos
     * const itemOrcamentos = await prisma.itemOrcamento.findMany()
     * 
     * // Get first 10 ItemOrcamentos
     * const itemOrcamentos = await prisma.itemOrcamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemOrcamentoWithIdOnly = await prisma.itemOrcamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemOrcamentoFindManyArgs>(args?: SelectSubset<T, ItemOrcamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemOrcamento.
     * @param {ItemOrcamentoCreateArgs} args - Arguments to create a ItemOrcamento.
     * @example
     * // Create one ItemOrcamento
     * const ItemOrcamento = await prisma.itemOrcamento.create({
     *   data: {
     *     // ... data to create a ItemOrcamento
     *   }
     * })
     * 
     */
    create<T extends ItemOrcamentoCreateArgs>(args: SelectSubset<T, ItemOrcamentoCreateArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemOrcamentos.
     * @param {ItemOrcamentoCreateManyArgs} args - Arguments to create many ItemOrcamentos.
     * @example
     * // Create many ItemOrcamentos
     * const itemOrcamento = await prisma.itemOrcamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemOrcamentoCreateManyArgs>(args?: SelectSubset<T, ItemOrcamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemOrcamentos and returns the data saved in the database.
     * @param {ItemOrcamentoCreateManyAndReturnArgs} args - Arguments to create many ItemOrcamentos.
     * @example
     * // Create many ItemOrcamentos
     * const itemOrcamento = await prisma.itemOrcamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemOrcamentos and only return the `id`
     * const itemOrcamentoWithIdOnly = await prisma.itemOrcamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemOrcamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemOrcamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemOrcamento.
     * @param {ItemOrcamentoDeleteArgs} args - Arguments to delete one ItemOrcamento.
     * @example
     * // Delete one ItemOrcamento
     * const ItemOrcamento = await prisma.itemOrcamento.delete({
     *   where: {
     *     // ... filter to delete one ItemOrcamento
     *   }
     * })
     * 
     */
    delete<T extends ItemOrcamentoDeleteArgs>(args: SelectSubset<T, ItemOrcamentoDeleteArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemOrcamento.
     * @param {ItemOrcamentoUpdateArgs} args - Arguments to update one ItemOrcamento.
     * @example
     * // Update one ItemOrcamento
     * const itemOrcamento = await prisma.itemOrcamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemOrcamentoUpdateArgs>(args: SelectSubset<T, ItemOrcamentoUpdateArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemOrcamentos.
     * @param {ItemOrcamentoDeleteManyArgs} args - Arguments to filter ItemOrcamentos to delete.
     * @example
     * // Delete a few ItemOrcamentos
     * const { count } = await prisma.itemOrcamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemOrcamentoDeleteManyArgs>(args?: SelectSubset<T, ItemOrcamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOrcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrcamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemOrcamentos
     * const itemOrcamento = await prisma.itemOrcamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemOrcamentoUpdateManyArgs>(args: SelectSubset<T, ItemOrcamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOrcamentos and returns the data updated in the database.
     * @param {ItemOrcamentoUpdateManyAndReturnArgs} args - Arguments to update many ItemOrcamentos.
     * @example
     * // Update many ItemOrcamentos
     * const itemOrcamento = await prisma.itemOrcamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemOrcamentos and only return the `id`
     * const itemOrcamentoWithIdOnly = await prisma.itemOrcamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemOrcamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemOrcamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemOrcamento.
     * @param {ItemOrcamentoUpsertArgs} args - Arguments to update or create a ItemOrcamento.
     * @example
     * // Update or create a ItemOrcamento
     * const itemOrcamento = await prisma.itemOrcamento.upsert({
     *   create: {
     *     // ... data to create a ItemOrcamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemOrcamento we want to update
     *   }
     * })
     */
    upsert<T extends ItemOrcamentoUpsertArgs>(args: SelectSubset<T, ItemOrcamentoUpsertArgs<ExtArgs>>): Prisma__ItemOrcamentoClient<$Result.GetResult<Prisma.$ItemOrcamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemOrcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrcamentoCountArgs} args - Arguments to filter ItemOrcamentos to count.
     * @example
     * // Count the number of ItemOrcamentos
     * const count = await prisma.itemOrcamento.count({
     *   where: {
     *     // ... the filter for the ItemOrcamentos we want to count
     *   }
     * })
    **/
    count<T extends ItemOrcamentoCountArgs>(
      args?: Subset<T, ItemOrcamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemOrcamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemOrcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrcamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemOrcamentoAggregateArgs>(args: Subset<T, ItemOrcamentoAggregateArgs>): Prisma.PrismaPromise<GetItemOrcamentoAggregateType<T>>

    /**
     * Group by ItemOrcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrcamentoGroupByArgs} args - Group by arguments.
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
      T extends ItemOrcamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemOrcamentoGroupByArgs['orderBy'] }
        : { orderBy?: ItemOrcamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemOrcamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemOrcamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemOrcamento model
   */
  readonly fields: ItemOrcamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemOrcamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemOrcamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orcamento<T extends OrcamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrcamentoDefaultArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ItemOrcamento$produtoArgs<ExtArgs> = {}>(args?: Subset<T, ItemOrcamento$produtoArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemOrcamento model
   */
  interface ItemOrcamentoFieldRefs {
    readonly id: FieldRef<"ItemOrcamento", 'String'>
    readonly orcamentoId: FieldRef<"ItemOrcamento", 'String'>
    readonly produtoId: FieldRef<"ItemOrcamento", 'String'>
    readonly servico: FieldRef<"ItemOrcamento", 'String'>
    readonly quantidade: FieldRef<"ItemOrcamento", 'Int'>
    readonly precoUnitario: FieldRef<"ItemOrcamento", 'Float'>
    readonly desconto: FieldRef<"ItemOrcamento", 'Float'>
    readonly total: FieldRef<"ItemOrcamento", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItemOrcamento findUnique
   */
  export type ItemOrcamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrcamento to fetch.
     */
    where: ItemOrcamentoWhereUniqueInput
  }

  /**
   * ItemOrcamento findUniqueOrThrow
   */
  export type ItemOrcamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrcamento to fetch.
     */
    where: ItemOrcamentoWhereUniqueInput
  }

  /**
   * ItemOrcamento findFirst
   */
  export type ItemOrcamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrcamento to fetch.
     */
    where?: ItemOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrcamentos to fetch.
     */
    orderBy?: ItemOrcamentoOrderByWithRelationInput | ItemOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOrcamentos.
     */
    cursor?: ItemOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOrcamentos.
     */
    distinct?: ItemOrcamentoScalarFieldEnum | ItemOrcamentoScalarFieldEnum[]
  }

  /**
   * ItemOrcamento findFirstOrThrow
   */
  export type ItemOrcamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrcamento to fetch.
     */
    where?: ItemOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrcamentos to fetch.
     */
    orderBy?: ItemOrcamentoOrderByWithRelationInput | ItemOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOrcamentos.
     */
    cursor?: ItemOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOrcamentos.
     */
    distinct?: ItemOrcamentoScalarFieldEnum | ItemOrcamentoScalarFieldEnum[]
  }

  /**
   * ItemOrcamento findMany
   */
  export type ItemOrcamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrcamentos to fetch.
     */
    where?: ItemOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrcamentos to fetch.
     */
    orderBy?: ItemOrcamentoOrderByWithRelationInput | ItemOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemOrcamentos.
     */
    cursor?: ItemOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrcamentos.
     */
    skip?: number
    distinct?: ItemOrcamentoScalarFieldEnum | ItemOrcamentoScalarFieldEnum[]
  }

  /**
   * ItemOrcamento create
   */
  export type ItemOrcamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemOrcamento.
     */
    data: XOR<ItemOrcamentoCreateInput, ItemOrcamentoUncheckedCreateInput>
  }

  /**
   * ItemOrcamento createMany
   */
  export type ItemOrcamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemOrcamentos.
     */
    data: ItemOrcamentoCreateManyInput | ItemOrcamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemOrcamento createManyAndReturn
   */
  export type ItemOrcamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemOrcamentos.
     */
    data: ItemOrcamentoCreateManyInput | ItemOrcamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOrcamento update
   */
  export type ItemOrcamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemOrcamento.
     */
    data: XOR<ItemOrcamentoUpdateInput, ItemOrcamentoUncheckedUpdateInput>
    /**
     * Choose, which ItemOrcamento to update.
     */
    where: ItemOrcamentoWhereUniqueInput
  }

  /**
   * ItemOrcamento updateMany
   */
  export type ItemOrcamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemOrcamentos.
     */
    data: XOR<ItemOrcamentoUpdateManyMutationInput, ItemOrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which ItemOrcamentos to update
     */
    where?: ItemOrcamentoWhereInput
    /**
     * Limit how many ItemOrcamentos to update.
     */
    limit?: number
  }

  /**
   * ItemOrcamento updateManyAndReturn
   */
  export type ItemOrcamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * The data used to update ItemOrcamentos.
     */
    data: XOR<ItemOrcamentoUpdateManyMutationInput, ItemOrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which ItemOrcamentos to update
     */
    where?: ItemOrcamentoWhereInput
    /**
     * Limit how many ItemOrcamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOrcamento upsert
   */
  export type ItemOrcamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemOrcamento to update in case it exists.
     */
    where: ItemOrcamentoWhereUniqueInput
    /**
     * In case the ItemOrcamento found by the `where` argument doesn't exist, create a new ItemOrcamento with this data.
     */
    create: XOR<ItemOrcamentoCreateInput, ItemOrcamentoUncheckedCreateInput>
    /**
     * In case the ItemOrcamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemOrcamentoUpdateInput, ItemOrcamentoUncheckedUpdateInput>
  }

  /**
   * ItemOrcamento delete
   */
  export type ItemOrcamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
    /**
     * Filter which ItemOrcamento to delete.
     */
    where: ItemOrcamentoWhereUniqueInput
  }

  /**
   * ItemOrcamento deleteMany
   */
  export type ItemOrcamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOrcamentos to delete
     */
    where?: ItemOrcamentoWhereInput
    /**
     * Limit how many ItemOrcamentos to delete.
     */
    limit?: number
  }

  /**
   * ItemOrcamento.produto
   */
  export type ItemOrcamento$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
  }

  /**
   * ItemOrcamento without action
   */
  export type ItemOrcamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrcamento
     */
    select?: ItemOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrcamento
     */
    omit?: ItemOrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrcamentoInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    valor: number | null
    parcelas: number | null
    taxaJuros: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    valor: number | null
    parcelas: number | null
    taxaJuros: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: string | null
    orcamentoId: string | null
    metodo: $Enums.MetodoPagamento | null
    valor: number | null
    parcelas: number | null
    taxaJuros: number | null
    status: $Enums.StatusPagamento | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: string | null
    orcamentoId: string | null
    metodo: $Enums.MetodoPagamento | null
    valor: number | null
    parcelas: number | null
    taxaJuros: number | null
    status: $Enums.StatusPagamento | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    orcamentoId: number
    metodo: number
    valor: number
    parcelas: number
    taxaJuros: number
    status: number
    datasVencimento: number
    lojaId: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    valor?: true
    parcelas?: true
    taxaJuros?: true
  }

  export type PagamentoSumAggregateInputType = {
    valor?: true
    parcelas?: true
    taxaJuros?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    orcamentoId?: true
    metodo?: true
    valor?: true
    parcelas?: true
    taxaJuros?: true
    status?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    orcamentoId?: true
    metodo?: true
    valor?: true
    parcelas?: true
    taxaJuros?: true
    status?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    orcamentoId?: true
    metodo?: true
    valor?: true
    parcelas?: true
    taxaJuros?: true
    status?: true
    datasVencimento?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: string
    orcamentoId: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas: number
    taxaJuros: number
    status: $Enums.StatusPagamento
    datasVencimento: JsonValue | null
    lojaId: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamentoId?: boolean
    metodo?: boolean
    valor?: boolean
    parcelas?: boolean
    taxaJuros?: boolean
    status?: boolean
    datasVencimento?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    fluxosCaixa?: boolean | Pagamento$fluxosCaixaArgs<ExtArgs>
    _count?: boolean | PagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamentoId?: boolean
    metodo?: boolean
    valor?: boolean
    parcelas?: boolean
    taxaJuros?: boolean
    status?: boolean
    datasVencimento?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamentoId?: boolean
    metodo?: boolean
    valor?: boolean
    parcelas?: boolean
    taxaJuros?: boolean
    status?: boolean
    datasVencimento?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id?: boolean
    orcamentoId?: boolean
    metodo?: boolean
    valor?: boolean
    parcelas?: boolean
    taxaJuros?: boolean
    status?: boolean
    datasVencimento?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orcamentoId" | "metodo" | "valor" | "parcelas" | "taxaJuros" | "status" | "datasVencimento" | "lojaId" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
    fluxosCaixa?: boolean | Pagamento$fluxosCaixaArgs<ExtArgs>
    _count?: boolean | PagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      orcamento: Prisma.$OrcamentoPayload<ExtArgs>
      loja: Prisma.$LojaPayload<ExtArgs>
      fluxosCaixa: Prisma.$FluxoCaixaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orcamentoId: string
      metodo: $Enums.MetodoPagamento
      valor: number
      parcelas: number
      taxaJuros: number
      status: $Enums.StatusPagamento
      datasVencimento: Prisma.JsonValue | null
      lojaId: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
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
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orcamento<T extends OrcamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrcamentoDefaultArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loja<T extends LojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LojaDefaultArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fluxosCaixa<T extends Pagamento$fluxosCaixaArgs<ExtArgs> = {}>(args?: Subset<T, Pagamento$fluxosCaixaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pagamento model
   */
  interface PagamentoFieldRefs {
    readonly id: FieldRef<"Pagamento", 'String'>
    readonly orcamentoId: FieldRef<"Pagamento", 'String'>
    readonly metodo: FieldRef<"Pagamento", 'MetodoPagamento'>
    readonly valor: FieldRef<"Pagamento", 'Float'>
    readonly parcelas: FieldRef<"Pagamento", 'Int'>
    readonly taxaJuros: FieldRef<"Pagamento", 'Float'>
    readonly status: FieldRef<"Pagamento", 'StatusPagamento'>
    readonly datasVencimento: FieldRef<"Pagamento", 'Json'>
    readonly lojaId: FieldRef<"Pagamento", 'String'>
    readonly dataCriacao: FieldRef<"Pagamento", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Pagamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento.fluxosCaixa
   */
  export type Pagamento$fluxosCaixaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    where?: FluxoCaixaWhereInput
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    cursor?: FluxoCaixaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
  }


  /**
   * Model FluxoCaixa
   */

  export type AggregateFluxoCaixa = {
    _count: FluxoCaixaCountAggregateOutputType | null
    _avg: FluxoCaixaAvgAggregateOutputType | null
    _sum: FluxoCaixaSumAggregateOutputType | null
    _min: FluxoCaixaMinAggregateOutputType | null
    _max: FluxoCaixaMaxAggregateOutputType | null
  }

  export type FluxoCaixaAvgAggregateOutputType = {
    valor: number | null
  }

  export type FluxoCaixaSumAggregateOutputType = {
    valor: number | null
  }

  export type FluxoCaixaMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    valor: number | null
    metodo: $Enums.MetodoPagamento | null
    categoria: string | null
    descricao: string | null
    pagamentoId: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type FluxoCaixaMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    valor: number | null
    metodo: $Enums.MetodoPagamento | null
    categoria: string | null
    descricao: string | null
    pagamentoId: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type FluxoCaixaCountAggregateOutputType = {
    id: number
    tipo: number
    valor: number
    metodo: number
    categoria: number
    descricao: number
    pagamentoId: number
    lojaId: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type FluxoCaixaAvgAggregateInputType = {
    valor?: true
  }

  export type FluxoCaixaSumAggregateInputType = {
    valor?: true
  }

  export type FluxoCaixaMinAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    metodo?: true
    categoria?: true
    descricao?: true
    pagamentoId?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type FluxoCaixaMaxAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    metodo?: true
    categoria?: true
    descricao?: true
    pagamentoId?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type FluxoCaixaCountAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    metodo?: true
    categoria?: true
    descricao?: true
    pagamentoId?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type FluxoCaixaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FluxoCaixa to aggregate.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FluxoCaixas
    **/
    _count?: true | FluxoCaixaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FluxoCaixaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FluxoCaixaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FluxoCaixaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FluxoCaixaMaxAggregateInputType
  }

  export type GetFluxoCaixaAggregateType<T extends FluxoCaixaAggregateArgs> = {
        [P in keyof T & keyof AggregateFluxoCaixa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFluxoCaixa[P]>
      : GetScalarType<T[P], AggregateFluxoCaixa[P]>
  }




  export type FluxoCaixaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FluxoCaixaWhereInput
    orderBy?: FluxoCaixaOrderByWithAggregationInput | FluxoCaixaOrderByWithAggregationInput[]
    by: FluxoCaixaScalarFieldEnum[] | FluxoCaixaScalarFieldEnum
    having?: FluxoCaixaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FluxoCaixaCountAggregateInputType | true
    _avg?: FluxoCaixaAvgAggregateInputType
    _sum?: FluxoCaixaSumAggregateInputType
    _min?: FluxoCaixaMinAggregateInputType
    _max?: FluxoCaixaMaxAggregateInputType
  }

  export type FluxoCaixaGroupByOutputType = {
    id: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria: string | null
    descricao: string
    pagamentoId: string | null
    lojaId: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: FluxoCaixaCountAggregateOutputType | null
    _avg: FluxoCaixaAvgAggregateOutputType | null
    _sum: FluxoCaixaSumAggregateOutputType | null
    _min: FluxoCaixaMinAggregateOutputType | null
    _max: FluxoCaixaMaxAggregateOutputType | null
  }

  type GetFluxoCaixaGroupByPayload<T extends FluxoCaixaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FluxoCaixaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FluxoCaixaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FluxoCaixaGroupByOutputType[P]>
            : GetScalarType<T[P], FluxoCaixaGroupByOutputType[P]>
        }
      >
    >


  export type FluxoCaixaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    metodo?: boolean
    categoria?: boolean
    descricao?: boolean
    pagamentoId?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    pagamento?: boolean | FluxoCaixa$pagamentoArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fluxoCaixa"]>

  export type FluxoCaixaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    metodo?: boolean
    categoria?: boolean
    descricao?: boolean
    pagamentoId?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    pagamento?: boolean | FluxoCaixa$pagamentoArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fluxoCaixa"]>

  export type FluxoCaixaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    metodo?: boolean
    categoria?: boolean
    descricao?: boolean
    pagamentoId?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    pagamento?: boolean | FluxoCaixa$pagamentoArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fluxoCaixa"]>

  export type FluxoCaixaSelectScalar = {
    id?: boolean
    tipo?: boolean
    valor?: boolean
    metodo?: boolean
    categoria?: boolean
    descricao?: boolean
    pagamentoId?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type FluxoCaixaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "valor" | "metodo" | "categoria" | "descricao" | "pagamentoId" | "lojaId" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["fluxoCaixa"]>
  export type FluxoCaixaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | FluxoCaixa$pagamentoArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type FluxoCaixaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | FluxoCaixa$pagamentoArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type FluxoCaixaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | FluxoCaixa$pagamentoArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }

  export type $FluxoCaixaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FluxoCaixa"
    objects: {
      pagamento: Prisma.$PagamentoPayload<ExtArgs> | null
      loja: Prisma.$LojaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      valor: number
      metodo: $Enums.MetodoPagamento
      categoria: string | null
      descricao: string
      pagamentoId: string | null
      lojaId: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["fluxoCaixa"]>
    composites: {}
  }

  type FluxoCaixaGetPayload<S extends boolean | null | undefined | FluxoCaixaDefaultArgs> = $Result.GetResult<Prisma.$FluxoCaixaPayload, S>

  type FluxoCaixaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FluxoCaixaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FluxoCaixaCountAggregateInputType | true
    }

  export interface FluxoCaixaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FluxoCaixa'], meta: { name: 'FluxoCaixa' } }
    /**
     * Find zero or one FluxoCaixa that matches the filter.
     * @param {FluxoCaixaFindUniqueArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FluxoCaixaFindUniqueArgs>(args: SelectSubset<T, FluxoCaixaFindUniqueArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FluxoCaixa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FluxoCaixaFindUniqueOrThrowArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FluxoCaixaFindUniqueOrThrowArgs>(args: SelectSubset<T, FluxoCaixaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FluxoCaixa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaFindFirstArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FluxoCaixaFindFirstArgs>(args?: SelectSubset<T, FluxoCaixaFindFirstArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FluxoCaixa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaFindFirstOrThrowArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FluxoCaixaFindFirstOrThrowArgs>(args?: SelectSubset<T, FluxoCaixaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FluxoCaixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FluxoCaixas
     * const fluxoCaixas = await prisma.fluxoCaixa.findMany()
     * 
     * // Get first 10 FluxoCaixas
     * const fluxoCaixas = await prisma.fluxoCaixa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fluxoCaixaWithIdOnly = await prisma.fluxoCaixa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FluxoCaixaFindManyArgs>(args?: SelectSubset<T, FluxoCaixaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FluxoCaixa.
     * @param {FluxoCaixaCreateArgs} args - Arguments to create a FluxoCaixa.
     * @example
     * // Create one FluxoCaixa
     * const FluxoCaixa = await prisma.fluxoCaixa.create({
     *   data: {
     *     // ... data to create a FluxoCaixa
     *   }
     * })
     * 
     */
    create<T extends FluxoCaixaCreateArgs>(args: SelectSubset<T, FluxoCaixaCreateArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FluxoCaixas.
     * @param {FluxoCaixaCreateManyArgs} args - Arguments to create many FluxoCaixas.
     * @example
     * // Create many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FluxoCaixaCreateManyArgs>(args?: SelectSubset<T, FluxoCaixaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FluxoCaixas and returns the data saved in the database.
     * @param {FluxoCaixaCreateManyAndReturnArgs} args - Arguments to create many FluxoCaixas.
     * @example
     * // Create many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FluxoCaixas and only return the `id`
     * const fluxoCaixaWithIdOnly = await prisma.fluxoCaixa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FluxoCaixaCreateManyAndReturnArgs>(args?: SelectSubset<T, FluxoCaixaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FluxoCaixa.
     * @param {FluxoCaixaDeleteArgs} args - Arguments to delete one FluxoCaixa.
     * @example
     * // Delete one FluxoCaixa
     * const FluxoCaixa = await prisma.fluxoCaixa.delete({
     *   where: {
     *     // ... filter to delete one FluxoCaixa
     *   }
     * })
     * 
     */
    delete<T extends FluxoCaixaDeleteArgs>(args: SelectSubset<T, FluxoCaixaDeleteArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FluxoCaixa.
     * @param {FluxoCaixaUpdateArgs} args - Arguments to update one FluxoCaixa.
     * @example
     * // Update one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FluxoCaixaUpdateArgs>(args: SelectSubset<T, FluxoCaixaUpdateArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FluxoCaixas.
     * @param {FluxoCaixaDeleteManyArgs} args - Arguments to filter FluxoCaixas to delete.
     * @example
     * // Delete a few FluxoCaixas
     * const { count } = await prisma.fluxoCaixa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FluxoCaixaDeleteManyArgs>(args?: SelectSubset<T, FluxoCaixaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FluxoCaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FluxoCaixaUpdateManyArgs>(args: SelectSubset<T, FluxoCaixaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FluxoCaixas and returns the data updated in the database.
     * @param {FluxoCaixaUpdateManyAndReturnArgs} args - Arguments to update many FluxoCaixas.
     * @example
     * // Update many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FluxoCaixas and only return the `id`
     * const fluxoCaixaWithIdOnly = await prisma.fluxoCaixa.updateManyAndReturn({
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
    updateManyAndReturn<T extends FluxoCaixaUpdateManyAndReturnArgs>(args: SelectSubset<T, FluxoCaixaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FluxoCaixa.
     * @param {FluxoCaixaUpsertArgs} args - Arguments to update or create a FluxoCaixa.
     * @example
     * // Update or create a FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.upsert({
     *   create: {
     *     // ... data to create a FluxoCaixa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FluxoCaixa we want to update
     *   }
     * })
     */
    upsert<T extends FluxoCaixaUpsertArgs>(args: SelectSubset<T, FluxoCaixaUpsertArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FluxoCaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaCountArgs} args - Arguments to filter FluxoCaixas to count.
     * @example
     * // Count the number of FluxoCaixas
     * const count = await prisma.fluxoCaixa.count({
     *   where: {
     *     // ... the filter for the FluxoCaixas we want to count
     *   }
     * })
    **/
    count<T extends FluxoCaixaCountArgs>(
      args?: Subset<T, FluxoCaixaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FluxoCaixaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FluxoCaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FluxoCaixaAggregateArgs>(args: Subset<T, FluxoCaixaAggregateArgs>): Prisma.PrismaPromise<GetFluxoCaixaAggregateType<T>>

    /**
     * Group by FluxoCaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaGroupByArgs} args - Group by arguments.
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
      T extends FluxoCaixaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FluxoCaixaGroupByArgs['orderBy'] }
        : { orderBy?: FluxoCaixaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FluxoCaixaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFluxoCaixaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FluxoCaixa model
   */
  readonly fields: FluxoCaixaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FluxoCaixa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FluxoCaixaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamento<T extends FluxoCaixa$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, FluxoCaixa$pagamentoArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loja<T extends LojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LojaDefaultArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FluxoCaixa model
   */
  interface FluxoCaixaFieldRefs {
    readonly id: FieldRef<"FluxoCaixa", 'String'>
    readonly tipo: FieldRef<"FluxoCaixa", 'String'>
    readonly valor: FieldRef<"FluxoCaixa", 'Float'>
    readonly metodo: FieldRef<"FluxoCaixa", 'MetodoPagamento'>
    readonly categoria: FieldRef<"FluxoCaixa", 'String'>
    readonly descricao: FieldRef<"FluxoCaixa", 'String'>
    readonly pagamentoId: FieldRef<"FluxoCaixa", 'String'>
    readonly lojaId: FieldRef<"FluxoCaixa", 'String'>
    readonly dataCriacao: FieldRef<"FluxoCaixa", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"FluxoCaixa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FluxoCaixa findUnique
   */
  export type FluxoCaixaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa findUniqueOrThrow
   */
  export type FluxoCaixaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa findFirst
   */
  export type FluxoCaixaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FluxoCaixas.
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FluxoCaixas.
     */
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * FluxoCaixa findFirstOrThrow
   */
  export type FluxoCaixaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FluxoCaixas.
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FluxoCaixas.
     */
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * FluxoCaixa findMany
   */
  export type FluxoCaixaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which FluxoCaixas to fetch.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FluxoCaixas.
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * FluxoCaixa create
   */
  export type FluxoCaixaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * The data needed to create a FluxoCaixa.
     */
    data: XOR<FluxoCaixaCreateInput, FluxoCaixaUncheckedCreateInput>
  }

  /**
   * FluxoCaixa createMany
   */
  export type FluxoCaixaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FluxoCaixas.
     */
    data: FluxoCaixaCreateManyInput | FluxoCaixaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FluxoCaixa createManyAndReturn
   */
  export type FluxoCaixaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * The data used to create many FluxoCaixas.
     */
    data: FluxoCaixaCreateManyInput | FluxoCaixaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FluxoCaixa update
   */
  export type FluxoCaixaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * The data needed to update a FluxoCaixa.
     */
    data: XOR<FluxoCaixaUpdateInput, FluxoCaixaUncheckedUpdateInput>
    /**
     * Choose, which FluxoCaixa to update.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa updateMany
   */
  export type FluxoCaixaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FluxoCaixas.
     */
    data: XOR<FluxoCaixaUpdateManyMutationInput, FluxoCaixaUncheckedUpdateManyInput>
    /**
     * Filter which FluxoCaixas to update
     */
    where?: FluxoCaixaWhereInput
    /**
     * Limit how many FluxoCaixas to update.
     */
    limit?: number
  }

  /**
   * FluxoCaixa updateManyAndReturn
   */
  export type FluxoCaixaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * The data used to update FluxoCaixas.
     */
    data: XOR<FluxoCaixaUpdateManyMutationInput, FluxoCaixaUncheckedUpdateManyInput>
    /**
     * Filter which FluxoCaixas to update
     */
    where?: FluxoCaixaWhereInput
    /**
     * Limit how many FluxoCaixas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FluxoCaixa upsert
   */
  export type FluxoCaixaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * The filter to search for the FluxoCaixa to update in case it exists.
     */
    where: FluxoCaixaWhereUniqueInput
    /**
     * In case the FluxoCaixa found by the `where` argument doesn't exist, create a new FluxoCaixa with this data.
     */
    create: XOR<FluxoCaixaCreateInput, FluxoCaixaUncheckedCreateInput>
    /**
     * In case the FluxoCaixa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FluxoCaixaUpdateInput, FluxoCaixaUncheckedUpdateInput>
  }

  /**
   * FluxoCaixa delete
   */
  export type FluxoCaixaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
    /**
     * Filter which FluxoCaixa to delete.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa deleteMany
   */
  export type FluxoCaixaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FluxoCaixas to delete
     */
    where?: FluxoCaixaWhereInput
    /**
     * Limit how many FluxoCaixas to delete.
     */
    limit?: number
  }

  /**
   * FluxoCaixa.pagamento
   */
  export type FluxoCaixa$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
  }

  /**
   * FluxoCaixa without action
   */
  export type FluxoCaixaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluxoCaixaInclude<ExtArgs> | null
  }


  /**
   * Model MovimentacaoEstoque
   */

  export type AggregateMovimentacaoEstoque = {
    _count: MovimentacaoEstoqueCountAggregateOutputType | null
    _avg: MovimentacaoEstoqueAvgAggregateOutputType | null
    _sum: MovimentacaoEstoqueSumAggregateOutputType | null
    _min: MovimentacaoEstoqueMinAggregateOutputType | null
    _max: MovimentacaoEstoqueMaxAggregateOutputType | null
  }

  export type MovimentacaoEstoqueAvgAggregateOutputType = {
    quantidade: number | null
    precoUnitario: number | null
  }

  export type MovimentacaoEstoqueSumAggregateOutputType = {
    quantidade: number | null
    precoUnitario: number | null
  }

  export type MovimentacaoEstoqueMinAggregateOutputType = {
    id: string | null
    produtoId: string | null
    tipo: string | null
    quantidade: number | null
    precoUnitario: number | null
    motivo: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type MovimentacaoEstoqueMaxAggregateOutputType = {
    id: string | null
    produtoId: string | null
    tipo: string | null
    quantidade: number | null
    precoUnitario: number | null
    motivo: string | null
    lojaId: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type MovimentacaoEstoqueCountAggregateOutputType = {
    id: number
    produtoId: number
    tipo: number
    quantidade: number
    precoUnitario: number
    motivo: number
    lojaId: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type MovimentacaoEstoqueAvgAggregateInputType = {
    quantidade?: true
    precoUnitario?: true
  }

  export type MovimentacaoEstoqueSumAggregateInputType = {
    quantidade?: true
    precoUnitario?: true
  }

  export type MovimentacaoEstoqueMinAggregateInputType = {
    id?: true
    produtoId?: true
    tipo?: true
    quantidade?: true
    precoUnitario?: true
    motivo?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type MovimentacaoEstoqueMaxAggregateInputType = {
    id?: true
    produtoId?: true
    tipo?: true
    quantidade?: true
    precoUnitario?: true
    motivo?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type MovimentacaoEstoqueCountAggregateInputType = {
    id?: true
    produtoId?: true
    tipo?: true
    quantidade?: true
    precoUnitario?: true
    motivo?: true
    lojaId?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type MovimentacaoEstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoEstoque to aggregate.
     */
    where?: MovimentacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoEstoques to fetch.
     */
    orderBy?: MovimentacaoEstoqueOrderByWithRelationInput | MovimentacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimentacaoEstoques
    **/
    _count?: true | MovimentacaoEstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoEstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoEstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoEstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoEstoqueMaxAggregateInputType
  }

  export type GetMovimentacaoEstoqueAggregateType<T extends MovimentacaoEstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacaoEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacaoEstoque[P]>
      : GetScalarType<T[P], AggregateMovimentacaoEstoque[P]>
  }




  export type MovimentacaoEstoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoEstoqueWhereInput
    orderBy?: MovimentacaoEstoqueOrderByWithAggregationInput | MovimentacaoEstoqueOrderByWithAggregationInput[]
    by: MovimentacaoEstoqueScalarFieldEnum[] | MovimentacaoEstoqueScalarFieldEnum
    having?: MovimentacaoEstoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoEstoqueCountAggregateInputType | true
    _avg?: MovimentacaoEstoqueAvgAggregateInputType
    _sum?: MovimentacaoEstoqueSumAggregateInputType
    _min?: MovimentacaoEstoqueMinAggregateInputType
    _max?: MovimentacaoEstoqueMaxAggregateInputType
  }

  export type MovimentacaoEstoqueGroupByOutputType = {
    id: string
    produtoId: string
    tipo: string
    quantidade: number
    precoUnitario: number | null
    motivo: string | null
    lojaId: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: MovimentacaoEstoqueCountAggregateOutputType | null
    _avg: MovimentacaoEstoqueAvgAggregateOutputType | null
    _sum: MovimentacaoEstoqueSumAggregateOutputType | null
    _min: MovimentacaoEstoqueMinAggregateOutputType | null
    _max: MovimentacaoEstoqueMaxAggregateOutputType | null
  }

  type GetMovimentacaoEstoqueGroupByPayload<T extends MovimentacaoEstoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoEstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoEstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoEstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoEstoqueGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoEstoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    tipo?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    motivo?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoEstoque"]>

  export type MovimentacaoEstoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    tipo?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    motivo?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoEstoque"]>

  export type MovimentacaoEstoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    tipo?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    motivo?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoEstoque"]>

  export type MovimentacaoEstoqueSelectScalar = {
    id?: boolean
    produtoId?: boolean
    tipo?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    motivo?: boolean
    lojaId?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type MovimentacaoEstoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produtoId" | "tipo" | "quantidade" | "precoUnitario" | "motivo" | "lojaId" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["movimentacaoEstoque"]>
  export type MovimentacaoEstoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type MovimentacaoEstoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }
  export type MovimentacaoEstoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    loja?: boolean | LojaDefaultArgs<ExtArgs>
  }

  export type $MovimentacaoEstoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimentacaoEstoque"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      loja: Prisma.$LojaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      produtoId: string
      tipo: string
      quantidade: number
      precoUnitario: number | null
      motivo: string | null
      lojaId: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["movimentacaoEstoque"]>
    composites: {}
  }

  type MovimentacaoEstoqueGetPayload<S extends boolean | null | undefined | MovimentacaoEstoqueDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoEstoquePayload, S>

  type MovimentacaoEstoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoEstoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoEstoqueCountAggregateInputType | true
    }

  export interface MovimentacaoEstoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimentacaoEstoque'], meta: { name: 'MovimentacaoEstoque' } }
    /**
     * Find zero or one MovimentacaoEstoque that matches the filter.
     * @param {MovimentacaoEstoqueFindUniqueArgs} args - Arguments to find a MovimentacaoEstoque
     * @example
     * // Get one MovimentacaoEstoque
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoEstoqueFindUniqueArgs>(args: SelectSubset<T, MovimentacaoEstoqueFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimentacaoEstoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoEstoqueFindUniqueOrThrowArgs} args - Arguments to find a MovimentacaoEstoque
     * @example
     * // Get one MovimentacaoEstoque
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoEstoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoEstoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoEstoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoEstoqueFindFirstArgs} args - Arguments to find a MovimentacaoEstoque
     * @example
     * // Get one MovimentacaoEstoque
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoEstoqueFindFirstArgs>(args?: SelectSubset<T, MovimentacaoEstoqueFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoEstoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoEstoqueFindFirstOrThrowArgs} args - Arguments to find a MovimentacaoEstoque
     * @example
     * // Get one MovimentacaoEstoque
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoEstoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoEstoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimentacaoEstoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoEstoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimentacaoEstoques
     * const movimentacaoEstoques = await prisma.movimentacaoEstoque.findMany()
     * 
     * // Get first 10 MovimentacaoEstoques
     * const movimentacaoEstoques = await prisma.movimentacaoEstoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoEstoqueWithIdOnly = await prisma.movimentacaoEstoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoEstoqueFindManyArgs>(args?: SelectSubset<T, MovimentacaoEstoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimentacaoEstoque.
     * @param {MovimentacaoEstoqueCreateArgs} args - Arguments to create a MovimentacaoEstoque.
     * @example
     * // Create one MovimentacaoEstoque
     * const MovimentacaoEstoque = await prisma.movimentacaoEstoque.create({
     *   data: {
     *     // ... data to create a MovimentacaoEstoque
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoEstoqueCreateArgs>(args: SelectSubset<T, MovimentacaoEstoqueCreateArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimentacaoEstoques.
     * @param {MovimentacaoEstoqueCreateManyArgs} args - Arguments to create many MovimentacaoEstoques.
     * @example
     * // Create many MovimentacaoEstoques
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoEstoqueCreateManyArgs>(args?: SelectSubset<T, MovimentacaoEstoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovimentacaoEstoques and returns the data saved in the database.
     * @param {MovimentacaoEstoqueCreateManyAndReturnArgs} args - Arguments to create many MovimentacaoEstoques.
     * @example
     * // Create many MovimentacaoEstoques
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovimentacaoEstoques and only return the `id`
     * const movimentacaoEstoqueWithIdOnly = await prisma.movimentacaoEstoque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimentacaoEstoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimentacaoEstoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovimentacaoEstoque.
     * @param {MovimentacaoEstoqueDeleteArgs} args - Arguments to delete one MovimentacaoEstoque.
     * @example
     * // Delete one MovimentacaoEstoque
     * const MovimentacaoEstoque = await prisma.movimentacaoEstoque.delete({
     *   where: {
     *     // ... filter to delete one MovimentacaoEstoque
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoEstoqueDeleteArgs>(args: SelectSubset<T, MovimentacaoEstoqueDeleteArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimentacaoEstoque.
     * @param {MovimentacaoEstoqueUpdateArgs} args - Arguments to update one MovimentacaoEstoque.
     * @example
     * // Update one MovimentacaoEstoque
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoEstoqueUpdateArgs>(args: SelectSubset<T, MovimentacaoEstoqueUpdateArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimentacaoEstoques.
     * @param {MovimentacaoEstoqueDeleteManyArgs} args - Arguments to filter MovimentacaoEstoques to delete.
     * @example
     * // Delete a few MovimentacaoEstoques
     * const { count } = await prisma.movimentacaoEstoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoEstoqueDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoEstoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoEstoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimentacaoEstoques
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoEstoqueUpdateManyArgs>(args: SelectSubset<T, MovimentacaoEstoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoEstoques and returns the data updated in the database.
     * @param {MovimentacaoEstoqueUpdateManyAndReturnArgs} args - Arguments to update many MovimentacaoEstoques.
     * @example
     * // Update many MovimentacaoEstoques
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovimentacaoEstoques and only return the `id`
     * const movimentacaoEstoqueWithIdOnly = await prisma.movimentacaoEstoque.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimentacaoEstoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimentacaoEstoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovimentacaoEstoque.
     * @param {MovimentacaoEstoqueUpsertArgs} args - Arguments to update or create a MovimentacaoEstoque.
     * @example
     * // Update or create a MovimentacaoEstoque
     * const movimentacaoEstoque = await prisma.movimentacaoEstoque.upsert({
     *   create: {
     *     // ... data to create a MovimentacaoEstoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimentacaoEstoque we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoEstoqueUpsertArgs>(args: SelectSubset<T, MovimentacaoEstoqueUpsertArgs<ExtArgs>>): Prisma__MovimentacaoEstoqueClient<$Result.GetResult<Prisma.$MovimentacaoEstoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimentacaoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoEstoqueCountArgs} args - Arguments to filter MovimentacaoEstoques to count.
     * @example
     * // Count the number of MovimentacaoEstoques
     * const count = await prisma.movimentacaoEstoque.count({
     *   where: {
     *     // ... the filter for the MovimentacaoEstoques we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoEstoqueCountArgs>(
      args?: Subset<T, MovimentacaoEstoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoEstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimentacaoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoEstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacaoEstoqueAggregateArgs>(args: Subset<T, MovimentacaoEstoqueAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoEstoqueAggregateType<T>>

    /**
     * Group by MovimentacaoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoEstoqueGroupByArgs} args - Group by arguments.
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
      T extends MovimentacaoEstoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoEstoqueGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoEstoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimentacaoEstoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimentacaoEstoque model
   */
  readonly fields: MovimentacaoEstoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimentacaoEstoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoEstoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loja<T extends LojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LojaDefaultArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MovimentacaoEstoque model
   */
  interface MovimentacaoEstoqueFieldRefs {
    readonly id: FieldRef<"MovimentacaoEstoque", 'String'>
    readonly produtoId: FieldRef<"MovimentacaoEstoque", 'String'>
    readonly tipo: FieldRef<"MovimentacaoEstoque", 'String'>
    readonly quantidade: FieldRef<"MovimentacaoEstoque", 'Int'>
    readonly precoUnitario: FieldRef<"MovimentacaoEstoque", 'Float'>
    readonly motivo: FieldRef<"MovimentacaoEstoque", 'String'>
    readonly lojaId: FieldRef<"MovimentacaoEstoque", 'String'>
    readonly dataCriacao: FieldRef<"MovimentacaoEstoque", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"MovimentacaoEstoque", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovimentacaoEstoque findUnique
   */
  export type MovimentacaoEstoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoEstoque to fetch.
     */
    where: MovimentacaoEstoqueWhereUniqueInput
  }

  /**
   * MovimentacaoEstoque findUniqueOrThrow
   */
  export type MovimentacaoEstoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoEstoque to fetch.
     */
    where: MovimentacaoEstoqueWhereUniqueInput
  }

  /**
   * MovimentacaoEstoque findFirst
   */
  export type MovimentacaoEstoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoEstoque to fetch.
     */
    where?: MovimentacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoEstoques to fetch.
     */
    orderBy?: MovimentacaoEstoqueOrderByWithRelationInput | MovimentacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoEstoques.
     */
    cursor?: MovimentacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoEstoques.
     */
    distinct?: MovimentacaoEstoqueScalarFieldEnum | MovimentacaoEstoqueScalarFieldEnum[]
  }

  /**
   * MovimentacaoEstoque findFirstOrThrow
   */
  export type MovimentacaoEstoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoEstoque to fetch.
     */
    where?: MovimentacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoEstoques to fetch.
     */
    orderBy?: MovimentacaoEstoqueOrderByWithRelationInput | MovimentacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoEstoques.
     */
    cursor?: MovimentacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoEstoques.
     */
    distinct?: MovimentacaoEstoqueScalarFieldEnum | MovimentacaoEstoqueScalarFieldEnum[]
  }

  /**
   * MovimentacaoEstoque findMany
   */
  export type MovimentacaoEstoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoEstoques to fetch.
     */
    where?: MovimentacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoEstoques to fetch.
     */
    orderBy?: MovimentacaoEstoqueOrderByWithRelationInput | MovimentacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimentacaoEstoques.
     */
    cursor?: MovimentacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoEstoques.
     */
    skip?: number
    distinct?: MovimentacaoEstoqueScalarFieldEnum | MovimentacaoEstoqueScalarFieldEnum[]
  }

  /**
   * MovimentacaoEstoque create
   */
  export type MovimentacaoEstoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimentacaoEstoque.
     */
    data: XOR<MovimentacaoEstoqueCreateInput, MovimentacaoEstoqueUncheckedCreateInput>
  }

  /**
   * MovimentacaoEstoque createMany
   */
  export type MovimentacaoEstoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimentacaoEstoques.
     */
    data: MovimentacaoEstoqueCreateManyInput | MovimentacaoEstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimentacaoEstoque createManyAndReturn
   */
  export type MovimentacaoEstoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * The data used to create many MovimentacaoEstoques.
     */
    data: MovimentacaoEstoqueCreateManyInput | MovimentacaoEstoqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoEstoque update
   */
  export type MovimentacaoEstoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimentacaoEstoque.
     */
    data: XOR<MovimentacaoEstoqueUpdateInput, MovimentacaoEstoqueUncheckedUpdateInput>
    /**
     * Choose, which MovimentacaoEstoque to update.
     */
    where: MovimentacaoEstoqueWhereUniqueInput
  }

  /**
   * MovimentacaoEstoque updateMany
   */
  export type MovimentacaoEstoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimentacaoEstoques.
     */
    data: XOR<MovimentacaoEstoqueUpdateManyMutationInput, MovimentacaoEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoEstoques to update
     */
    where?: MovimentacaoEstoqueWhereInput
    /**
     * Limit how many MovimentacaoEstoques to update.
     */
    limit?: number
  }

  /**
   * MovimentacaoEstoque updateManyAndReturn
   */
  export type MovimentacaoEstoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * The data used to update MovimentacaoEstoques.
     */
    data: XOR<MovimentacaoEstoqueUpdateManyMutationInput, MovimentacaoEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoEstoques to update
     */
    where?: MovimentacaoEstoqueWhereInput
    /**
     * Limit how many MovimentacaoEstoques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoEstoque upsert
   */
  export type MovimentacaoEstoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimentacaoEstoque to update in case it exists.
     */
    where: MovimentacaoEstoqueWhereUniqueInput
    /**
     * In case the MovimentacaoEstoque found by the `where` argument doesn't exist, create a new MovimentacaoEstoque with this data.
     */
    create: XOR<MovimentacaoEstoqueCreateInput, MovimentacaoEstoqueUncheckedCreateInput>
    /**
     * In case the MovimentacaoEstoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoEstoqueUpdateInput, MovimentacaoEstoqueUncheckedUpdateInput>
  }

  /**
   * MovimentacaoEstoque delete
   */
  export type MovimentacaoEstoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter which MovimentacaoEstoque to delete.
     */
    where: MovimentacaoEstoqueWhereUniqueInput
  }

  /**
   * MovimentacaoEstoque deleteMany
   */
  export type MovimentacaoEstoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoEstoques to delete
     */
    where?: MovimentacaoEstoqueWhereInput
    /**
     * Limit how many MovimentacaoEstoques to delete.
     */
    limit?: number
  }

  /**
   * MovimentacaoEstoque without action
   */
  export type MovimentacaoEstoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoEstoque
     */
    select?: MovimentacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoEstoque
     */
    omit?: MovimentacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoEstoqueInclude<ExtArgs> | null
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


  export const LojaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    codigoUrl: 'codigoUrl',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    configuracoes: 'configuracoes'
  };

  export type LojaScalarFieldEnum = (typeof LojaScalarFieldEnum)[keyof typeof LojaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    nome: 'nome',
    perfil: 'perfil',
    lojaId: 'lojaId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    ultimoLogin: 'ultimoLogin'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    codigoBarras: 'codigoBarras',
    quantidade: 'quantidade',
    precoCusto: 'precoCusto',
    precoVenda: 'precoVenda',
    categoria: 'categoria',
    lojaId: 'lojaId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    documento: 'documento',
    endereco: 'endereco',
    lojaId: 'lojaId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const OrcamentoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    clienteId: 'clienteId',
    desconto: 'desconto',
    valorTotal: 'valorTotal',
    observacoes: 'observacoes',
    status: 'status',
    lojaId: 'lojaId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type OrcamentoScalarFieldEnum = (typeof OrcamentoScalarFieldEnum)[keyof typeof OrcamentoScalarFieldEnum]


  export const ItemOrcamentoScalarFieldEnum: {
    id: 'id',
    orcamentoId: 'orcamentoId',
    produtoId: 'produtoId',
    servico: 'servico',
    quantidade: 'quantidade',
    precoUnitario: 'precoUnitario',
    desconto: 'desconto',
    total: 'total'
  };

  export type ItemOrcamentoScalarFieldEnum = (typeof ItemOrcamentoScalarFieldEnum)[keyof typeof ItemOrcamentoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    orcamentoId: 'orcamentoId',
    metodo: 'metodo',
    valor: 'valor',
    parcelas: 'parcelas',
    taxaJuros: 'taxaJuros',
    status: 'status',
    datasVencimento: 'datasVencimento',
    lojaId: 'lojaId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const FluxoCaixaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    valor: 'valor',
    metodo: 'metodo',
    categoria: 'categoria',
    descricao: 'descricao',
    pagamentoId: 'pagamentoId',
    lojaId: 'lojaId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type FluxoCaixaScalarFieldEnum = (typeof FluxoCaixaScalarFieldEnum)[keyof typeof FluxoCaixaScalarFieldEnum]


  export const MovimentacaoEstoqueScalarFieldEnum: {
    id: 'id',
    produtoId: 'produtoId',
    tipo: 'tipo',
    quantidade: 'quantidade',
    precoUnitario: 'precoUnitario',
    motivo: 'motivo',
    lojaId: 'lojaId',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type MovimentacaoEstoqueScalarFieldEnum = (typeof MovimentacaoEstoqueScalarFieldEnum)[keyof typeof MovimentacaoEstoqueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PerfilUsuario'
   */
  export type EnumPerfilUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerfilUsuario'>
    


  /**
   * Reference to a field of type 'PerfilUsuario[]'
   */
  export type ListEnumPerfilUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerfilUsuario[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MetodoPagamento'
   */
  export type EnumMetodoPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPagamento'>
    


  /**
   * Reference to a field of type 'MetodoPagamento[]'
   */
  export type ListEnumMetodoPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPagamento[]'>
    


  /**
   * Reference to a field of type 'StatusPagamento'
   */
  export type EnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento'>
    


  /**
   * Reference to a field of type 'StatusPagamento[]'
   */
  export type ListEnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento[]'>
    
  /**
   * Deep Input Types
   */


  export type LojaWhereInput = {
    AND?: LojaWhereInput | LojaWhereInput[]
    OR?: LojaWhereInput[]
    NOT?: LojaWhereInput | LojaWhereInput[]
    id?: StringFilter<"Loja"> | string
    nome?: StringFilter<"Loja"> | string
    codigoUrl?: StringFilter<"Loja"> | string
    dataCriacao?: DateTimeFilter<"Loja"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Loja"> | Date | string
    configuracoes?: JsonNullableFilter<"Loja">
    usuarios?: UsuarioListRelationFilter
    produtos?: ProdutoListRelationFilter
    clientes?: ClienteListRelationFilter
    orcamentos?: OrcamentoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    movimentacoesFinanceiras?: FluxoCaixaListRelationFilter
    movimentacoesEstoque?: MovimentacaoEstoqueListRelationFilter
  }

  export type LojaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    configuracoes?: SortOrderInput | SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    produtos?: ProdutoOrderByRelationAggregateInput
    clientes?: ClienteOrderByRelationAggregateInput
    orcamentos?: OrcamentoOrderByRelationAggregateInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
    movimentacoesFinanceiras?: FluxoCaixaOrderByRelationAggregateInput
    movimentacoesEstoque?: MovimentacaoEstoqueOrderByRelationAggregateInput
  }

  export type LojaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    codigoUrl?: string
    AND?: LojaWhereInput | LojaWhereInput[]
    OR?: LojaWhereInput[]
    NOT?: LojaWhereInput | LojaWhereInput[]
    dataCriacao?: DateTimeFilter<"Loja"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Loja"> | Date | string
    configuracoes?: JsonNullableFilter<"Loja">
    usuarios?: UsuarioListRelationFilter
    produtos?: ProdutoListRelationFilter
    clientes?: ClienteListRelationFilter
    orcamentos?: OrcamentoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    movimentacoesFinanceiras?: FluxoCaixaListRelationFilter
    movimentacoesEstoque?: MovimentacaoEstoqueListRelationFilter
  }, "id" | "nome" | "codigoUrl">

  export type LojaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    configuracoes?: SortOrderInput | SortOrder
    _count?: LojaCountOrderByAggregateInput
    _max?: LojaMaxOrderByAggregateInput
    _min?: LojaMinOrderByAggregateInput
  }

  export type LojaScalarWhereWithAggregatesInput = {
    AND?: LojaScalarWhereWithAggregatesInput | LojaScalarWhereWithAggregatesInput[]
    OR?: LojaScalarWhereWithAggregatesInput[]
    NOT?: LojaScalarWhereWithAggregatesInput | LojaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Loja"> | string
    nome?: StringWithAggregatesFilter<"Loja"> | string
    codigoUrl?: StringWithAggregatesFilter<"Loja"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Loja"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Loja"> | Date | string
    configuracoes?: JsonNullableWithAggregatesFilter<"Loja">
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringNullableFilter<"Usuario"> | string | null
    perfil?: EnumPerfilUsuarioFilter<"Usuario"> | $Enums.PerfilUsuario
    lojaId?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Usuario"> | Date | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrderInput | SortOrder
    perfil?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    loja?: LojaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    nome?: StringNullableFilter<"Usuario"> | string | null
    perfil?: EnumPerfilUsuarioFilter<"Usuario"> | $Enums.PerfilUsuario
    lojaId?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Usuario"> | Date | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrderInput | SortOrder
    perfil?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    perfil?: EnumPerfilUsuarioWithAggregatesFilter<"Usuario"> | $Enums.PerfilUsuario
    lojaId?: StringWithAggregatesFilter<"Usuario"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    ultimoLogin?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    codigoBarras?: StringNullableFilter<"Produto"> | string | null
    quantidade?: IntFilter<"Produto"> | number
    precoCusto?: FloatFilter<"Produto"> | number
    precoVenda?: FloatFilter<"Produto"> | number
    categoria?: StringNullableFilter<"Produto"> | string | null
    lojaId?: StringFilter<"Produto"> | string
    dataCriacao?: DateTimeFilter<"Produto"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Produto"> | Date | string
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    itensOrcamento?: ItemOrcamentoListRelationFilter
    movimentacoes?: MovimentacaoEstoqueListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    precoVenda?: SortOrder
    categoria?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    loja?: LojaOrderByWithRelationInput
    itensOrcamento?: ItemOrcamentoOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoEstoqueOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    codigoBarras?: StringNullableFilter<"Produto"> | string | null
    quantidade?: IntFilter<"Produto"> | number
    precoCusto?: FloatFilter<"Produto"> | number
    precoVenda?: FloatFilter<"Produto"> | number
    categoria?: StringNullableFilter<"Produto"> | string | null
    lojaId?: StringFilter<"Produto"> | string
    dataCriacao?: DateTimeFilter<"Produto"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Produto"> | Date | string
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    itensOrcamento?: ItemOrcamentoListRelationFilter
    movimentacoes?: MovimentacaoEstoqueListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    precoVenda?: SortOrder
    categoria?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produto"> | string
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    codigoBarras?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    quantidade?: IntWithAggregatesFilter<"Produto"> | number
    precoCusto?: FloatWithAggregatesFilter<"Produto"> | number
    precoVenda?: FloatWithAggregatesFilter<"Produto"> | number
    categoria?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    lojaId?: StringWithAggregatesFilter<"Produto"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringFilter<"Cliente"> | string
    documento?: StringNullableFilter<"Cliente"> | string | null
    endereco?: StringNullableFilter<"Cliente"> | string | null
    lojaId?: StringFilter<"Cliente"> | string
    dataCriacao?: DateTimeFilter<"Cliente"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Cliente"> | Date | string
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    orcamentos?: OrcamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrder
    documento?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    loja?: LojaOrderByWithRelationInput
    orcamentos?: OrcamentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringFilter<"Cliente"> | string
    documento?: StringNullableFilter<"Cliente"> | string | null
    endereco?: StringNullableFilter<"Cliente"> | string | null
    lojaId?: StringFilter<"Cliente"> | string
    dataCriacao?: DateTimeFilter<"Cliente"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Cliente"> | Date | string
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    orcamentos?: OrcamentoListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrder
    documento?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    documento?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    lojaId?: StringWithAggregatesFilter<"Cliente"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type OrcamentoWhereInput = {
    AND?: OrcamentoWhereInput | OrcamentoWhereInput[]
    OR?: OrcamentoWhereInput[]
    NOT?: OrcamentoWhereInput | OrcamentoWhereInput[]
    id?: StringFilter<"Orcamento"> | string
    codigo?: StringFilter<"Orcamento"> | string
    clienteId?: StringFilter<"Orcamento"> | string
    desconto?: FloatFilter<"Orcamento"> | number
    valorTotal?: FloatFilter<"Orcamento"> | number
    observacoes?: StringNullableFilter<"Orcamento"> | string | null
    status?: StringFilter<"Orcamento"> | string
    lojaId?: StringFilter<"Orcamento"> | string
    dataCriacao?: DateTimeFilter<"Orcamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Orcamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: ItemOrcamentoListRelationFilter
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
  }

  export type OrcamentoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    clienteId?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    status?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    itens?: ItemOrcamentoOrderByRelationAggregateInput
    loja?: LojaOrderByWithRelationInput
    pagamento?: PagamentoOrderByWithRelationInput
  }

  export type OrcamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: OrcamentoWhereInput | OrcamentoWhereInput[]
    OR?: OrcamentoWhereInput[]
    NOT?: OrcamentoWhereInput | OrcamentoWhereInput[]
    clienteId?: StringFilter<"Orcamento"> | string
    desconto?: FloatFilter<"Orcamento"> | number
    valorTotal?: FloatFilter<"Orcamento"> | number
    observacoes?: StringNullableFilter<"Orcamento"> | string | null
    status?: StringFilter<"Orcamento"> | string
    lojaId?: StringFilter<"Orcamento"> | string
    dataCriacao?: DateTimeFilter<"Orcamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Orcamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: ItemOrcamentoListRelationFilter
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
  }, "id" | "codigo">

  export type OrcamentoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    clienteId?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    status?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: OrcamentoCountOrderByAggregateInput
    _avg?: OrcamentoAvgOrderByAggregateInput
    _max?: OrcamentoMaxOrderByAggregateInput
    _min?: OrcamentoMinOrderByAggregateInput
    _sum?: OrcamentoSumOrderByAggregateInput
  }

  export type OrcamentoScalarWhereWithAggregatesInput = {
    AND?: OrcamentoScalarWhereWithAggregatesInput | OrcamentoScalarWhereWithAggregatesInput[]
    OR?: OrcamentoScalarWhereWithAggregatesInput[]
    NOT?: OrcamentoScalarWhereWithAggregatesInput | OrcamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orcamento"> | string
    codigo?: StringWithAggregatesFilter<"Orcamento"> | string
    clienteId?: StringWithAggregatesFilter<"Orcamento"> | string
    desconto?: FloatWithAggregatesFilter<"Orcamento"> | number
    valorTotal?: FloatWithAggregatesFilter<"Orcamento"> | number
    observacoes?: StringNullableWithAggregatesFilter<"Orcamento"> | string | null
    status?: StringWithAggregatesFilter<"Orcamento"> | string
    lojaId?: StringWithAggregatesFilter<"Orcamento"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
  }

  export type ItemOrcamentoWhereInput = {
    AND?: ItemOrcamentoWhereInput | ItemOrcamentoWhereInput[]
    OR?: ItemOrcamentoWhereInput[]
    NOT?: ItemOrcamentoWhereInput | ItemOrcamentoWhereInput[]
    id?: StringFilter<"ItemOrcamento"> | string
    orcamentoId?: StringFilter<"ItemOrcamento"> | string
    produtoId?: StringNullableFilter<"ItemOrcamento"> | string | null
    servico?: StringNullableFilter<"ItemOrcamento"> | string | null
    quantidade?: IntFilter<"ItemOrcamento"> | number
    precoUnitario?: FloatFilter<"ItemOrcamento"> | number
    desconto?: FloatFilter<"ItemOrcamento"> | number
    total?: FloatFilter<"ItemOrcamento"> | number
    orcamento?: XOR<OrcamentoScalarRelationFilter, OrcamentoWhereInput>
    produto?: XOR<ProdutoNullableScalarRelationFilter, ProdutoWhereInput> | null
  }

  export type ItemOrcamentoOrderByWithRelationInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    produtoId?: SortOrderInput | SortOrder
    servico?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
    orcamento?: OrcamentoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type ItemOrcamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemOrcamentoWhereInput | ItemOrcamentoWhereInput[]
    OR?: ItemOrcamentoWhereInput[]
    NOT?: ItemOrcamentoWhereInput | ItemOrcamentoWhereInput[]
    orcamentoId?: StringFilter<"ItemOrcamento"> | string
    produtoId?: StringNullableFilter<"ItemOrcamento"> | string | null
    servico?: StringNullableFilter<"ItemOrcamento"> | string | null
    quantidade?: IntFilter<"ItemOrcamento"> | number
    precoUnitario?: FloatFilter<"ItemOrcamento"> | number
    desconto?: FloatFilter<"ItemOrcamento"> | number
    total?: FloatFilter<"ItemOrcamento"> | number
    orcamento?: XOR<OrcamentoScalarRelationFilter, OrcamentoWhereInput>
    produto?: XOR<ProdutoNullableScalarRelationFilter, ProdutoWhereInput> | null
  }, "id">

  export type ItemOrcamentoOrderByWithAggregationInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    produtoId?: SortOrderInput | SortOrder
    servico?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
    _count?: ItemOrcamentoCountOrderByAggregateInput
    _avg?: ItemOrcamentoAvgOrderByAggregateInput
    _max?: ItemOrcamentoMaxOrderByAggregateInput
    _min?: ItemOrcamentoMinOrderByAggregateInput
    _sum?: ItemOrcamentoSumOrderByAggregateInput
  }

  export type ItemOrcamentoScalarWhereWithAggregatesInput = {
    AND?: ItemOrcamentoScalarWhereWithAggregatesInput | ItemOrcamentoScalarWhereWithAggregatesInput[]
    OR?: ItemOrcamentoScalarWhereWithAggregatesInput[]
    NOT?: ItemOrcamentoScalarWhereWithAggregatesInput | ItemOrcamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemOrcamento"> | string
    orcamentoId?: StringWithAggregatesFilter<"ItemOrcamento"> | string
    produtoId?: StringNullableWithAggregatesFilter<"ItemOrcamento"> | string | null
    servico?: StringNullableWithAggregatesFilter<"ItemOrcamento"> | string | null
    quantidade?: IntWithAggregatesFilter<"ItemOrcamento"> | number
    precoUnitario?: FloatWithAggregatesFilter<"ItemOrcamento"> | number
    desconto?: FloatWithAggregatesFilter<"ItemOrcamento"> | number
    total?: FloatWithAggregatesFilter<"ItemOrcamento"> | number
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id?: StringFilter<"Pagamento"> | string
    orcamentoId?: StringFilter<"Pagamento"> | string
    metodo?: EnumMetodoPagamentoFilter<"Pagamento"> | $Enums.MetodoPagamento
    valor?: FloatFilter<"Pagamento"> | number
    parcelas?: IntFilter<"Pagamento"> | number
    taxaJuros?: FloatFilter<"Pagamento"> | number
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    datasVencimento?: JsonNullableFilter<"Pagamento">
    lojaId?: StringFilter<"Pagamento"> | string
    dataCriacao?: DateTimeFilter<"Pagamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Pagamento"> | Date | string
    orcamento?: XOR<OrcamentoScalarRelationFilter, OrcamentoWhereInput>
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    fluxosCaixa?: FluxoCaixaListRelationFilter
  }

  export type PagamentoOrderByWithRelationInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    metodo?: SortOrder
    valor?: SortOrder
    parcelas?: SortOrder
    taxaJuros?: SortOrder
    status?: SortOrder
    datasVencimento?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    orcamento?: OrcamentoOrderByWithRelationInput
    loja?: LojaOrderByWithRelationInput
    fluxosCaixa?: FluxoCaixaOrderByRelationAggregateInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orcamentoId?: string
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    metodo?: EnumMetodoPagamentoFilter<"Pagamento"> | $Enums.MetodoPagamento
    valor?: FloatFilter<"Pagamento"> | number
    parcelas?: IntFilter<"Pagamento"> | number
    taxaJuros?: FloatFilter<"Pagamento"> | number
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    datasVencimento?: JsonNullableFilter<"Pagamento">
    lojaId?: StringFilter<"Pagamento"> | string
    dataCriacao?: DateTimeFilter<"Pagamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Pagamento"> | Date | string
    orcamento?: XOR<OrcamentoScalarRelationFilter, OrcamentoWhereInput>
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
    fluxosCaixa?: FluxoCaixaListRelationFilter
  }, "id" | "orcamentoId">

  export type PagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    metodo?: SortOrder
    valor?: SortOrder
    parcelas?: SortOrder
    taxaJuros?: SortOrder
    status?: SortOrder
    datasVencimento?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pagamento"> | string
    orcamentoId?: StringWithAggregatesFilter<"Pagamento"> | string
    metodo?: EnumMetodoPagamentoWithAggregatesFilter<"Pagamento"> | $Enums.MetodoPagamento
    valor?: FloatWithAggregatesFilter<"Pagamento"> | number
    parcelas?: IntWithAggregatesFilter<"Pagamento"> | number
    taxaJuros?: FloatWithAggregatesFilter<"Pagamento"> | number
    status?: EnumStatusPagamentoWithAggregatesFilter<"Pagamento"> | $Enums.StatusPagamento
    datasVencimento?: JsonNullableWithAggregatesFilter<"Pagamento">
    lojaId?: StringWithAggregatesFilter<"Pagamento"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
  }

  export type FluxoCaixaWhereInput = {
    AND?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    OR?: FluxoCaixaWhereInput[]
    NOT?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    id?: StringFilter<"FluxoCaixa"> | string
    tipo?: StringFilter<"FluxoCaixa"> | string
    valor?: FloatFilter<"FluxoCaixa"> | number
    metodo?: EnumMetodoPagamentoFilter<"FluxoCaixa"> | $Enums.MetodoPagamento
    categoria?: StringNullableFilter<"FluxoCaixa"> | string | null
    descricao?: StringFilter<"FluxoCaixa"> | string
    pagamentoId?: StringNullableFilter<"FluxoCaixa"> | string | null
    lojaId?: StringFilter<"FluxoCaixa"> | string
    dataCriacao?: DateTimeFilter<"FluxoCaixa"> | Date | string
    dataAtualizacao?: DateTimeFilter<"FluxoCaixa"> | Date | string
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
  }

  export type FluxoCaixaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    categoria?: SortOrderInput | SortOrder
    descricao?: SortOrder
    pagamentoId?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    pagamento?: PagamentoOrderByWithRelationInput
    loja?: LojaOrderByWithRelationInput
  }

  export type FluxoCaixaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    OR?: FluxoCaixaWhereInput[]
    NOT?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    tipo?: StringFilter<"FluxoCaixa"> | string
    valor?: FloatFilter<"FluxoCaixa"> | number
    metodo?: EnumMetodoPagamentoFilter<"FluxoCaixa"> | $Enums.MetodoPagamento
    categoria?: StringNullableFilter<"FluxoCaixa"> | string | null
    descricao?: StringFilter<"FluxoCaixa"> | string
    pagamentoId?: StringNullableFilter<"FluxoCaixa"> | string | null
    lojaId?: StringFilter<"FluxoCaixa"> | string
    dataCriacao?: DateTimeFilter<"FluxoCaixa"> | Date | string
    dataAtualizacao?: DateTimeFilter<"FluxoCaixa"> | Date | string
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
  }, "id">

  export type FluxoCaixaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    categoria?: SortOrderInput | SortOrder
    descricao?: SortOrder
    pagamentoId?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: FluxoCaixaCountOrderByAggregateInput
    _avg?: FluxoCaixaAvgOrderByAggregateInput
    _max?: FluxoCaixaMaxOrderByAggregateInput
    _min?: FluxoCaixaMinOrderByAggregateInput
    _sum?: FluxoCaixaSumOrderByAggregateInput
  }

  export type FluxoCaixaScalarWhereWithAggregatesInput = {
    AND?: FluxoCaixaScalarWhereWithAggregatesInput | FluxoCaixaScalarWhereWithAggregatesInput[]
    OR?: FluxoCaixaScalarWhereWithAggregatesInput[]
    NOT?: FluxoCaixaScalarWhereWithAggregatesInput | FluxoCaixaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FluxoCaixa"> | string
    tipo?: StringWithAggregatesFilter<"FluxoCaixa"> | string
    valor?: FloatWithAggregatesFilter<"FluxoCaixa"> | number
    metodo?: EnumMetodoPagamentoWithAggregatesFilter<"FluxoCaixa"> | $Enums.MetodoPagamento
    categoria?: StringNullableWithAggregatesFilter<"FluxoCaixa"> | string | null
    descricao?: StringWithAggregatesFilter<"FluxoCaixa"> | string
    pagamentoId?: StringNullableWithAggregatesFilter<"FluxoCaixa"> | string | null
    lojaId?: StringWithAggregatesFilter<"FluxoCaixa"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"FluxoCaixa"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"FluxoCaixa"> | Date | string
  }

  export type MovimentacaoEstoqueWhereInput = {
    AND?: MovimentacaoEstoqueWhereInput | MovimentacaoEstoqueWhereInput[]
    OR?: MovimentacaoEstoqueWhereInput[]
    NOT?: MovimentacaoEstoqueWhereInput | MovimentacaoEstoqueWhereInput[]
    id?: StringFilter<"MovimentacaoEstoque"> | string
    produtoId?: StringFilter<"MovimentacaoEstoque"> | string
    tipo?: StringFilter<"MovimentacaoEstoque"> | string
    quantidade?: IntFilter<"MovimentacaoEstoque"> | number
    precoUnitario?: FloatNullableFilter<"MovimentacaoEstoque"> | number | null
    motivo?: StringNullableFilter<"MovimentacaoEstoque"> | string | null
    lojaId?: StringFilter<"MovimentacaoEstoque"> | string
    dataCriacao?: DateTimeFilter<"MovimentacaoEstoque"> | Date | string
    dataAtualizacao?: DateTimeFilter<"MovimentacaoEstoque"> | Date | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
  }

  export type MovimentacaoEstoqueOrderByWithRelationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    loja?: LojaOrderByWithRelationInput
  }

  export type MovimentacaoEstoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimentacaoEstoqueWhereInput | MovimentacaoEstoqueWhereInput[]
    OR?: MovimentacaoEstoqueWhereInput[]
    NOT?: MovimentacaoEstoqueWhereInput | MovimentacaoEstoqueWhereInput[]
    produtoId?: StringFilter<"MovimentacaoEstoque"> | string
    tipo?: StringFilter<"MovimentacaoEstoque"> | string
    quantidade?: IntFilter<"MovimentacaoEstoque"> | number
    precoUnitario?: FloatNullableFilter<"MovimentacaoEstoque"> | number | null
    motivo?: StringNullableFilter<"MovimentacaoEstoque"> | string | null
    lojaId?: StringFilter<"MovimentacaoEstoque"> | string
    dataCriacao?: DateTimeFilter<"MovimentacaoEstoque"> | Date | string
    dataAtualizacao?: DateTimeFilter<"MovimentacaoEstoque"> | Date | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    loja?: XOR<LojaScalarRelationFilter, LojaWhereInput>
  }, "id">

  export type MovimentacaoEstoqueOrderByWithAggregationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: MovimentacaoEstoqueCountOrderByAggregateInput
    _avg?: MovimentacaoEstoqueAvgOrderByAggregateInput
    _max?: MovimentacaoEstoqueMaxOrderByAggregateInput
    _min?: MovimentacaoEstoqueMinOrderByAggregateInput
    _sum?: MovimentacaoEstoqueSumOrderByAggregateInput
  }

  export type MovimentacaoEstoqueScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoEstoqueScalarWhereWithAggregatesInput | MovimentacaoEstoqueScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoEstoqueScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoEstoqueScalarWhereWithAggregatesInput | MovimentacaoEstoqueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovimentacaoEstoque"> | string
    produtoId?: StringWithAggregatesFilter<"MovimentacaoEstoque"> | string
    tipo?: StringWithAggregatesFilter<"MovimentacaoEstoque"> | string
    quantidade?: IntWithAggregatesFilter<"MovimentacaoEstoque"> | number
    precoUnitario?: FloatNullableWithAggregatesFilter<"MovimentacaoEstoque"> | number | null
    motivo?: StringNullableWithAggregatesFilter<"MovimentacaoEstoque"> | string | null
    lojaId?: StringWithAggregatesFilter<"MovimentacaoEstoque"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"MovimentacaoEstoque"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"MovimentacaoEstoque"> | Date | string
  }

  export type LojaCreateInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioCreateNestedManyWithoutLojaInput
    produtos?: ProdutoCreateNestedManyWithoutLojaInput
    clientes?: ClienteCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLojaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutLojaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type LojaCreateManyInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LojaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LojaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    senha: string
    nome?: string | null
    perfil?: $Enums.PerfilUsuario
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    ultimoLogin?: Date | string | null
    loja: LojaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    senha: string
    nome?: string | null
    perfil?: $Enums.PerfilUsuario
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    ultimoLogin?: Date | string | null
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loja?: LojaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    senha: string
    nome?: string | null
    perfil?: $Enums.PerfilUsuario
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    ultimoLogin?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutoCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutProdutosInput
    itensOrcamento?: ItemOrcamentoCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoEstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itensOrcamento?: ItemOrcamentoUncheckedCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutProdutosNestedInput
    itensOrcamento?: ItemOrcamentoUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoEstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itensOrcamento?: ItemOrcamentoUncheckedUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoEstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ProdutoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutClientesInput
    orcamentos?: OrcamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutClientesNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoCreateInput = {
    id?: string
    codigo: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrcamentosInput
    itens?: ItemOrcamentoCreateNestedManyWithoutOrcamentoInput
    loja: LojaCreateNestedOneWithoutOrcamentosInput
    pagamento?: PagamentoCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoUncheckedCreateInput = {
    id?: string
    codigo: string
    clienteId: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itens?: ItemOrcamentoUncheckedCreateNestedManyWithoutOrcamentoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrcamentosNestedInput
    itens?: ItemOrcamentoUpdateManyWithoutOrcamentoNestedInput
    loja?: LojaUpdateOneRequiredWithoutOrcamentosNestedInput
    pagamento?: PagamentoUpdateOneWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemOrcamentoUncheckedUpdateManyWithoutOrcamentoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutOrcamentoNestedInput
  }

  export type OrcamentoCreateManyInput = {
    id?: string
    codigo: string
    clienteId: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type OrcamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemOrcamentoCreateInput = {
    id?: string
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
    orcamento: OrcamentoCreateNestedOneWithoutItensInput
    produto?: ProdutoCreateNestedOneWithoutItensOrcamentoInput
  }

  export type ItemOrcamentoUncheckedCreateInput = {
    id?: string
    orcamentoId: string
    produtoId?: string | null
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
  }

  export type ItemOrcamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    orcamento?: OrcamentoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneWithoutItensOrcamentoNestedInput
  }

  export type ItemOrcamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    produtoId?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemOrcamentoCreateManyInput = {
    id?: string
    orcamentoId: string
    produtoId?: string | null
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
  }

  export type ItemOrcamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemOrcamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    produtoId?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type PagamentoCreateInput = {
    id?: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    orcamento: OrcamentoCreateNestedOneWithoutPagamentoInput
    loja: LojaCreateNestedOneWithoutPagamentosInput
    fluxosCaixa?: FluxoCaixaCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateInput = {
    id?: string
    orcamentoId: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    fluxosCaixa?: FluxoCaixaUncheckedCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: OrcamentoUpdateOneRequiredWithoutPagamentoNestedInput
    loja?: LojaUpdateOneRequiredWithoutPagamentosNestedInput
    fluxosCaixa?: FluxoCaixaUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fluxosCaixa?: FluxoCaixaUncheckedUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoCreateManyInput = {
    id?: string
    orcamentoId: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PagamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaCreateInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    pagamento?: PagamentoCreateNestedOneWithoutFluxosCaixaInput
    loja: LojaCreateNestedOneWithoutMovimentacoesFinanceirasInput
  }

  export type FluxoCaixaUncheckedCreateInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    pagamentoId?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type FluxoCaixaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: PagamentoUpdateOneWithoutFluxosCaixaNestedInput
    loja?: LojaUpdateOneRequiredWithoutMovimentacoesFinanceirasNestedInput
  }

  export type FluxoCaixaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    pagamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaCreateManyInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    pagamentoId?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type FluxoCaixaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    pagamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoEstoqueCreateInput = {
    id?: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    produto: ProdutoCreateNestedOneWithoutMovimentacoesInput
    loja: LojaCreateNestedOneWithoutMovimentacoesEstoqueInput
  }

  export type MovimentacaoEstoqueUncheckedCreateInput = {
    id?: string
    produtoId: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type MovimentacaoEstoqueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutMovimentacoesNestedInput
    loja?: LojaUpdateOneRequiredWithoutMovimentacoesEstoqueNestedInput
  }

  export type MovimentacaoEstoqueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoEstoqueCreateManyInput = {
    id?: string
    produtoId: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type MovimentacaoEstoqueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoEstoqueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type OrcamentoListRelationFilter = {
    every?: OrcamentoWhereInput
    some?: OrcamentoWhereInput
    none?: OrcamentoWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: PagamentoWhereInput
    some?: PagamentoWhereInput
    none?: PagamentoWhereInput
  }

  export type FluxoCaixaListRelationFilter = {
    every?: FluxoCaixaWhereInput
    some?: FluxoCaixaWhereInput
    none?: FluxoCaixaWhereInput
  }

  export type MovimentacaoEstoqueListRelationFilter = {
    every?: MovimentacaoEstoqueWhereInput
    some?: MovimentacaoEstoqueWhereInput
    none?: MovimentacaoEstoqueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrcamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FluxoCaixaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoEstoqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LojaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    configuracoes?: SortOrder
  }

  export type LojaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type LojaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoUrl?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumPerfilUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioFilter<$PrismaModel> | $Enums.PerfilUsuario
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

  export type LojaScalarRelationFilter = {
    is?: LojaWhereInput
    isNot?: LojaWhereInput
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    perfil?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    ultimoLogin?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    perfil?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    ultimoLogin?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    perfil?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    ultimoLogin?: SortOrder
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

  export type EnumPerfilUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.PerfilUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
    _max?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ItemOrcamentoListRelationFilter = {
    every?: ItemOrcamentoWhereInput
    some?: ItemOrcamentoWhereInput
    none?: ItemOrcamentoWhereInput
  }

  export type ItemOrcamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigoBarras?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    precoVenda?: SortOrder
    categoria?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    precoCusto?: SortOrder
    precoVenda?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigoBarras?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    precoVenda?: SortOrder
    categoria?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    codigoBarras?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    precoVenda?: SortOrder
    categoria?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    quantidade?: SortOrder
    precoCusto?: SortOrder
    precoVenda?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    documento?: SortOrder
    endereco?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    documento?: SortOrder
    endereco?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    documento?: SortOrder
    endereco?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PagamentoNullableScalarRelationFilter = {
    is?: PagamentoWhereInput | null
    isNot?: PagamentoWhereInput | null
  }

  export type OrcamentoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    clienteId?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type OrcamentoAvgOrderByAggregateInput = {
    desconto?: SortOrder
    valorTotal?: SortOrder
  }

  export type OrcamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    clienteId?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type OrcamentoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    clienteId?: SortOrder
    desconto?: SortOrder
    valorTotal?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type OrcamentoSumOrderByAggregateInput = {
    desconto?: SortOrder
    valorTotal?: SortOrder
  }

  export type OrcamentoScalarRelationFilter = {
    is?: OrcamentoWhereInput
    isNot?: OrcamentoWhereInput
  }

  export type ProdutoNullableScalarRelationFilter = {
    is?: ProdutoWhereInput | null
    isNot?: ProdutoWhereInput | null
  }

  export type ItemOrcamentoCountOrderByAggregateInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    produtoId?: SortOrder
    servico?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
  }

  export type ItemOrcamentoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
  }

  export type ItemOrcamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    produtoId?: SortOrder
    servico?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
  }

  export type ItemOrcamentoMinOrderByAggregateInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    produtoId?: SortOrder
    servico?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
  }

  export type ItemOrcamentoSumOrderByAggregateInput = {
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
  }

  export type EnumMetodoPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoFilter<$PrismaModel> | $Enums.MetodoPagamento
  }

  export type EnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
  }

  export type PagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    metodo?: SortOrder
    valor?: SortOrder
    parcelas?: SortOrder
    taxaJuros?: SortOrder
    status?: SortOrder
    datasVencimento?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    valor?: SortOrder
    parcelas?: SortOrder
    taxaJuros?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    metodo?: SortOrder
    valor?: SortOrder
    parcelas?: SortOrder
    taxaJuros?: SortOrder
    status?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    orcamentoId?: SortOrder
    metodo?: SortOrder
    valor?: SortOrder
    parcelas?: SortOrder
    taxaJuros?: SortOrder
    status?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    valor?: SortOrder
    parcelas?: SortOrder
    taxaJuros?: SortOrder
  }

  export type EnumMetodoPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
  }

  export type EnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
  }

  export type FluxoCaixaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    pagamentoId?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type FluxoCaixaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FluxoCaixaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    pagamentoId?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type FluxoCaixaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    pagamentoId?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type FluxoCaixaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type MovimentacaoEstoqueCountOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    motivo?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type MovimentacaoEstoqueAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    precoUnitario?: SortOrder
  }

  export type MovimentacaoEstoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    motivo?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type MovimentacaoEstoqueMinOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    motivo?: SortOrder
    lojaId?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type MovimentacaoEstoqueSumOrderByAggregateInput = {
    quantidade?: SortOrder
    precoUnitario?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutLojaInput = {
    create?: XOR<UsuarioCreateWithoutLojaInput, UsuarioUncheckedCreateWithoutLojaInput> | UsuarioCreateWithoutLojaInput[] | UsuarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLojaInput | UsuarioCreateOrConnectWithoutLojaInput[]
    createMany?: UsuarioCreateManyLojaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutLojaInput = {
    create?: XOR<ProdutoCreateWithoutLojaInput, ProdutoUncheckedCreateWithoutLojaInput> | ProdutoCreateWithoutLojaInput[] | ProdutoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLojaInput | ProdutoCreateOrConnectWithoutLojaInput[]
    createMany?: ProdutoCreateManyLojaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ClienteCreateNestedManyWithoutLojaInput = {
    create?: XOR<ClienteCreateWithoutLojaInput, ClienteUncheckedCreateWithoutLojaInput> | ClienteCreateWithoutLojaInput[] | ClienteUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLojaInput | ClienteCreateOrConnectWithoutLojaInput[]
    createMany?: ClienteCreateManyLojaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type OrcamentoCreateNestedManyWithoutLojaInput = {
    create?: XOR<OrcamentoCreateWithoutLojaInput, OrcamentoUncheckedCreateWithoutLojaInput> | OrcamentoCreateWithoutLojaInput[] | OrcamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutLojaInput | OrcamentoCreateOrConnectWithoutLojaInput[]
    createMany?: OrcamentoCreateManyLojaInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type PagamentoCreateNestedManyWithoutLojaInput = {
    create?: XOR<PagamentoCreateWithoutLojaInput, PagamentoUncheckedCreateWithoutLojaInput> | PagamentoCreateWithoutLojaInput[] | PagamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutLojaInput | PagamentoCreateOrConnectWithoutLojaInput[]
    createMany?: PagamentoCreateManyLojaInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type FluxoCaixaCreateNestedManyWithoutLojaInput = {
    create?: XOR<FluxoCaixaCreateWithoutLojaInput, FluxoCaixaUncheckedCreateWithoutLojaInput> | FluxoCaixaCreateWithoutLojaInput[] | FluxoCaixaUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutLojaInput | FluxoCaixaCreateOrConnectWithoutLojaInput[]
    createMany?: FluxoCaixaCreateManyLojaInputEnvelope
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
  }

  export type MovimentacaoEstoqueCreateNestedManyWithoutLojaInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutLojaInput, MovimentacaoEstoqueUncheckedCreateWithoutLojaInput> | MovimentacaoEstoqueCreateWithoutLojaInput[] | MovimentacaoEstoqueUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutLojaInput | MovimentacaoEstoqueCreateOrConnectWithoutLojaInput[]
    createMany?: MovimentacaoEstoqueCreateManyLojaInputEnvelope
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<UsuarioCreateWithoutLojaInput, UsuarioUncheckedCreateWithoutLojaInput> | UsuarioCreateWithoutLojaInput[] | UsuarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLojaInput | UsuarioCreateOrConnectWithoutLojaInput[]
    createMany?: UsuarioCreateManyLojaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<ProdutoCreateWithoutLojaInput, ProdutoUncheckedCreateWithoutLojaInput> | ProdutoCreateWithoutLojaInput[] | ProdutoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLojaInput | ProdutoCreateOrConnectWithoutLojaInput[]
    createMany?: ProdutoCreateManyLojaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<ClienteCreateWithoutLojaInput, ClienteUncheckedCreateWithoutLojaInput> | ClienteCreateWithoutLojaInput[] | ClienteUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLojaInput | ClienteCreateOrConnectWithoutLojaInput[]
    createMany?: ClienteCreateManyLojaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type OrcamentoUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<OrcamentoCreateWithoutLojaInput, OrcamentoUncheckedCreateWithoutLojaInput> | OrcamentoCreateWithoutLojaInput[] | OrcamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutLojaInput | OrcamentoCreateOrConnectWithoutLojaInput[]
    createMany?: OrcamentoCreateManyLojaInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<PagamentoCreateWithoutLojaInput, PagamentoUncheckedCreateWithoutLojaInput> | PagamentoCreateWithoutLojaInput[] | PagamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutLojaInput | PagamentoCreateOrConnectWithoutLojaInput[]
    createMany?: PagamentoCreateManyLojaInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<FluxoCaixaCreateWithoutLojaInput, FluxoCaixaUncheckedCreateWithoutLojaInput> | FluxoCaixaCreateWithoutLojaInput[] | FluxoCaixaUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutLojaInput | FluxoCaixaCreateOrConnectWithoutLojaInput[]
    createMany?: FluxoCaixaCreateManyLojaInputEnvelope
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
  }

  export type MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutLojaInput, MovimentacaoEstoqueUncheckedCreateWithoutLojaInput> | MovimentacaoEstoqueCreateWithoutLojaInput[] | MovimentacaoEstoqueUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutLojaInput | MovimentacaoEstoqueCreateOrConnectWithoutLojaInput[]
    createMany?: MovimentacaoEstoqueCreateManyLojaInputEnvelope
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateManyWithoutLojaNestedInput = {
    create?: XOR<UsuarioCreateWithoutLojaInput, UsuarioUncheckedCreateWithoutLojaInput> | UsuarioCreateWithoutLojaInput[] | UsuarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLojaInput | UsuarioCreateOrConnectWithoutLojaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutLojaInput | UsuarioUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: UsuarioCreateManyLojaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutLojaInput | UsuarioUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutLojaInput | UsuarioUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutLojaNestedInput = {
    create?: XOR<ProdutoCreateWithoutLojaInput, ProdutoUncheckedCreateWithoutLojaInput> | ProdutoCreateWithoutLojaInput[] | ProdutoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLojaInput | ProdutoCreateOrConnectWithoutLojaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutLojaInput | ProdutoUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: ProdutoCreateManyLojaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutLojaInput | ProdutoUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutLojaInput | ProdutoUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ClienteUpdateManyWithoutLojaNestedInput = {
    create?: XOR<ClienteCreateWithoutLojaInput, ClienteUncheckedCreateWithoutLojaInput> | ClienteCreateWithoutLojaInput[] | ClienteUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLojaInput | ClienteCreateOrConnectWithoutLojaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLojaInput | ClienteUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: ClienteCreateManyLojaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLojaInput | ClienteUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLojaInput | ClienteUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type OrcamentoUpdateManyWithoutLojaNestedInput = {
    create?: XOR<OrcamentoCreateWithoutLojaInput, OrcamentoUncheckedCreateWithoutLojaInput> | OrcamentoCreateWithoutLojaInput[] | OrcamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutLojaInput | OrcamentoCreateOrConnectWithoutLojaInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutLojaInput | OrcamentoUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: OrcamentoCreateManyLojaInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutLojaInput | OrcamentoUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutLojaInput | OrcamentoUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type PagamentoUpdateManyWithoutLojaNestedInput = {
    create?: XOR<PagamentoCreateWithoutLojaInput, PagamentoUncheckedCreateWithoutLojaInput> | PagamentoCreateWithoutLojaInput[] | PagamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutLojaInput | PagamentoCreateOrConnectWithoutLojaInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutLojaInput | PagamentoUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: PagamentoCreateManyLojaInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutLojaInput | PagamentoUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutLojaInput | PagamentoUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type FluxoCaixaUpdateManyWithoutLojaNestedInput = {
    create?: XOR<FluxoCaixaCreateWithoutLojaInput, FluxoCaixaUncheckedCreateWithoutLojaInput> | FluxoCaixaCreateWithoutLojaInput[] | FluxoCaixaUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutLojaInput | FluxoCaixaCreateOrConnectWithoutLojaInput[]
    upsert?: FluxoCaixaUpsertWithWhereUniqueWithoutLojaInput | FluxoCaixaUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: FluxoCaixaCreateManyLojaInputEnvelope
    set?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    disconnect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    delete?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    update?: FluxoCaixaUpdateWithWhereUniqueWithoutLojaInput | FluxoCaixaUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: FluxoCaixaUpdateManyWithWhereWithoutLojaInput | FluxoCaixaUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: FluxoCaixaScalarWhereInput | FluxoCaixaScalarWhereInput[]
  }

  export type MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutLojaInput, MovimentacaoEstoqueUncheckedCreateWithoutLojaInput> | MovimentacaoEstoqueCreateWithoutLojaInput[] | MovimentacaoEstoqueUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutLojaInput | MovimentacaoEstoqueCreateOrConnectWithoutLojaInput[]
    upsert?: MovimentacaoEstoqueUpsertWithWhereUniqueWithoutLojaInput | MovimentacaoEstoqueUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: MovimentacaoEstoqueCreateManyLojaInputEnvelope
    set?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    disconnect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    delete?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    update?: MovimentacaoEstoqueUpdateWithWhereUniqueWithoutLojaInput | MovimentacaoEstoqueUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: MovimentacaoEstoqueUpdateManyWithWhereWithoutLojaInput | MovimentacaoEstoqueUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: MovimentacaoEstoqueScalarWhereInput | MovimentacaoEstoqueScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<UsuarioCreateWithoutLojaInput, UsuarioUncheckedCreateWithoutLojaInput> | UsuarioCreateWithoutLojaInput[] | UsuarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLojaInput | UsuarioCreateOrConnectWithoutLojaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutLojaInput | UsuarioUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: UsuarioCreateManyLojaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutLojaInput | UsuarioUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutLojaInput | UsuarioUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<ProdutoCreateWithoutLojaInput, ProdutoUncheckedCreateWithoutLojaInput> | ProdutoCreateWithoutLojaInput[] | ProdutoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutLojaInput | ProdutoCreateOrConnectWithoutLojaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutLojaInput | ProdutoUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: ProdutoCreateManyLojaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutLojaInput | ProdutoUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutLojaInput | ProdutoUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<ClienteCreateWithoutLojaInput, ClienteUncheckedCreateWithoutLojaInput> | ClienteCreateWithoutLojaInput[] | ClienteUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLojaInput | ClienteCreateOrConnectWithoutLojaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLojaInput | ClienteUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: ClienteCreateManyLojaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLojaInput | ClienteUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLojaInput | ClienteUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type OrcamentoUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<OrcamentoCreateWithoutLojaInput, OrcamentoUncheckedCreateWithoutLojaInput> | OrcamentoCreateWithoutLojaInput[] | OrcamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutLojaInput | OrcamentoCreateOrConnectWithoutLojaInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutLojaInput | OrcamentoUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: OrcamentoCreateManyLojaInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutLojaInput | OrcamentoUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutLojaInput | OrcamentoUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<PagamentoCreateWithoutLojaInput, PagamentoUncheckedCreateWithoutLojaInput> | PagamentoCreateWithoutLojaInput[] | PagamentoUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutLojaInput | PagamentoCreateOrConnectWithoutLojaInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutLojaInput | PagamentoUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: PagamentoCreateManyLojaInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutLojaInput | PagamentoUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutLojaInput | PagamentoUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<FluxoCaixaCreateWithoutLojaInput, FluxoCaixaUncheckedCreateWithoutLojaInput> | FluxoCaixaCreateWithoutLojaInput[] | FluxoCaixaUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutLojaInput | FluxoCaixaCreateOrConnectWithoutLojaInput[]
    upsert?: FluxoCaixaUpsertWithWhereUniqueWithoutLojaInput | FluxoCaixaUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: FluxoCaixaCreateManyLojaInputEnvelope
    set?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    disconnect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    delete?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    update?: FluxoCaixaUpdateWithWhereUniqueWithoutLojaInput | FluxoCaixaUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: FluxoCaixaUpdateManyWithWhereWithoutLojaInput | FluxoCaixaUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: FluxoCaixaScalarWhereInput | FluxoCaixaScalarWhereInput[]
  }

  export type MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutLojaInput, MovimentacaoEstoqueUncheckedCreateWithoutLojaInput> | MovimentacaoEstoqueCreateWithoutLojaInput[] | MovimentacaoEstoqueUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutLojaInput | MovimentacaoEstoqueCreateOrConnectWithoutLojaInput[]
    upsert?: MovimentacaoEstoqueUpsertWithWhereUniqueWithoutLojaInput | MovimentacaoEstoqueUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: MovimentacaoEstoqueCreateManyLojaInputEnvelope
    set?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    disconnect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    delete?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    update?: MovimentacaoEstoqueUpdateWithWhereUniqueWithoutLojaInput | MovimentacaoEstoqueUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: MovimentacaoEstoqueUpdateManyWithWhereWithoutLojaInput | MovimentacaoEstoqueUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: MovimentacaoEstoqueScalarWhereInput | MovimentacaoEstoqueScalarWhereInput[]
  }

  export type LojaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<LojaCreateWithoutUsuariosInput, LojaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutUsuariosInput
    connect?: LojaWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPerfilUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.PerfilUsuario
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LojaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<LojaCreateWithoutUsuariosInput, LojaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutUsuariosInput
    upsert?: LojaUpsertWithoutUsuariosInput
    connect?: LojaWhereUniqueInput
    update?: XOR<XOR<LojaUpdateToOneWithWhereWithoutUsuariosInput, LojaUpdateWithoutUsuariosInput>, LojaUncheckedUpdateWithoutUsuariosInput>
  }

  export type LojaCreateNestedOneWithoutProdutosInput = {
    create?: XOR<LojaCreateWithoutProdutosInput, LojaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutProdutosInput
    connect?: LojaWhereUniqueInput
  }

  export type ItemOrcamentoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemOrcamentoCreateWithoutProdutoInput, ItemOrcamentoUncheckedCreateWithoutProdutoInput> | ItemOrcamentoCreateWithoutProdutoInput[] | ItemOrcamentoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutProdutoInput | ItemOrcamentoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemOrcamentoCreateManyProdutoInputEnvelope
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
  }

  export type MovimentacaoEstoqueCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutProdutoInput, MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentacaoEstoqueCreateWithoutProdutoInput[] | MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput | MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentacaoEstoqueCreateManyProdutoInputEnvelope
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
  }

  export type ItemOrcamentoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemOrcamentoCreateWithoutProdutoInput, ItemOrcamentoUncheckedCreateWithoutProdutoInput> | ItemOrcamentoCreateWithoutProdutoInput[] | ItemOrcamentoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutProdutoInput | ItemOrcamentoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemOrcamentoCreateManyProdutoInputEnvelope
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
  }

  export type MovimentacaoEstoqueUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutProdutoInput, MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentacaoEstoqueCreateWithoutProdutoInput[] | MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput | MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentacaoEstoqueCreateManyProdutoInputEnvelope
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LojaUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<LojaCreateWithoutProdutosInput, LojaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutProdutosInput
    upsert?: LojaUpsertWithoutProdutosInput
    connect?: LojaWhereUniqueInput
    update?: XOR<XOR<LojaUpdateToOneWithWhereWithoutProdutosInput, LojaUpdateWithoutProdutosInput>, LojaUncheckedUpdateWithoutProdutosInput>
  }

  export type ItemOrcamentoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemOrcamentoCreateWithoutProdutoInput, ItemOrcamentoUncheckedCreateWithoutProdutoInput> | ItemOrcamentoCreateWithoutProdutoInput[] | ItemOrcamentoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutProdutoInput | ItemOrcamentoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemOrcamentoUpsertWithWhereUniqueWithoutProdutoInput | ItemOrcamentoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemOrcamentoCreateManyProdutoInputEnvelope
    set?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    disconnect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    delete?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    update?: ItemOrcamentoUpdateWithWhereUniqueWithoutProdutoInput | ItemOrcamentoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemOrcamentoUpdateManyWithWhereWithoutProdutoInput | ItemOrcamentoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemOrcamentoScalarWhereInput | ItemOrcamentoScalarWhereInput[]
  }

  export type MovimentacaoEstoqueUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutProdutoInput, MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentacaoEstoqueCreateWithoutProdutoInput[] | MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput | MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentacaoEstoqueUpsertWithWhereUniqueWithoutProdutoInput | MovimentacaoEstoqueUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentacaoEstoqueCreateManyProdutoInputEnvelope
    set?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    disconnect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    delete?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    update?: MovimentacaoEstoqueUpdateWithWhereUniqueWithoutProdutoInput | MovimentacaoEstoqueUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentacaoEstoqueUpdateManyWithWhereWithoutProdutoInput | MovimentacaoEstoqueUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentacaoEstoqueScalarWhereInput | MovimentacaoEstoqueScalarWhereInput[]
  }

  export type ItemOrcamentoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemOrcamentoCreateWithoutProdutoInput, ItemOrcamentoUncheckedCreateWithoutProdutoInput> | ItemOrcamentoCreateWithoutProdutoInput[] | ItemOrcamentoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutProdutoInput | ItemOrcamentoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemOrcamentoUpsertWithWhereUniqueWithoutProdutoInput | ItemOrcamentoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemOrcamentoCreateManyProdutoInputEnvelope
    set?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    disconnect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    delete?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    update?: ItemOrcamentoUpdateWithWhereUniqueWithoutProdutoInput | ItemOrcamentoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemOrcamentoUpdateManyWithWhereWithoutProdutoInput | ItemOrcamentoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemOrcamentoScalarWhereInput | ItemOrcamentoScalarWhereInput[]
  }

  export type MovimentacaoEstoqueUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentacaoEstoqueCreateWithoutProdutoInput, MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput> | MovimentacaoEstoqueCreateWithoutProdutoInput[] | MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput | MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentacaoEstoqueUpsertWithWhereUniqueWithoutProdutoInput | MovimentacaoEstoqueUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentacaoEstoqueCreateManyProdutoInputEnvelope
    set?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    disconnect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    delete?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    connect?: MovimentacaoEstoqueWhereUniqueInput | MovimentacaoEstoqueWhereUniqueInput[]
    update?: MovimentacaoEstoqueUpdateWithWhereUniqueWithoutProdutoInput | MovimentacaoEstoqueUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentacaoEstoqueUpdateManyWithWhereWithoutProdutoInput | MovimentacaoEstoqueUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentacaoEstoqueScalarWhereInput | MovimentacaoEstoqueScalarWhereInput[]
  }

  export type LojaCreateNestedOneWithoutClientesInput = {
    create?: XOR<LojaCreateWithoutClientesInput, LojaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: LojaCreateOrConnectWithoutClientesInput
    connect?: LojaWhereUniqueInput
  }

  export type OrcamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type OrcamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type LojaUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<LojaCreateWithoutClientesInput, LojaUncheckedCreateWithoutClientesInput>
    connectOrCreate?: LojaCreateOrConnectWithoutClientesInput
    upsert?: LojaUpsertWithoutClientesInput
    connect?: LojaWhereUniqueInput
    update?: XOR<XOR<LojaUpdateToOneWithWhereWithoutClientesInput, LojaUpdateWithoutClientesInput>, LojaUncheckedUpdateWithoutClientesInput>
  }

  export type OrcamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutClienteInput | OrcamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutClienteInput | OrcamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutClienteInput | OrcamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type OrcamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutClienteInput | OrcamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutClienteInput | OrcamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutClienteInput | OrcamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutOrcamentosInput = {
    create?: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrcamentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ItemOrcamentoCreateNestedManyWithoutOrcamentoInput = {
    create?: XOR<ItemOrcamentoCreateWithoutOrcamentoInput, ItemOrcamentoUncheckedCreateWithoutOrcamentoInput> | ItemOrcamentoCreateWithoutOrcamentoInput[] | ItemOrcamentoUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutOrcamentoInput | ItemOrcamentoCreateOrConnectWithoutOrcamentoInput[]
    createMany?: ItemOrcamentoCreateManyOrcamentoInputEnvelope
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
  }

  export type LojaCreateNestedOneWithoutOrcamentosInput = {
    create?: XOR<LojaCreateWithoutOrcamentosInput, LojaUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutOrcamentosInput
    connect?: LojaWhereUniqueInput
  }

  export type PagamentoCreateNestedOneWithoutOrcamentoInput = {
    create?: XOR<PagamentoCreateWithoutOrcamentoInput, PagamentoUncheckedCreateWithoutOrcamentoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutOrcamentoInput
    connect?: PagamentoWhereUniqueInput
  }

  export type ItemOrcamentoUncheckedCreateNestedManyWithoutOrcamentoInput = {
    create?: XOR<ItemOrcamentoCreateWithoutOrcamentoInput, ItemOrcamentoUncheckedCreateWithoutOrcamentoInput> | ItemOrcamentoCreateWithoutOrcamentoInput[] | ItemOrcamentoUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutOrcamentoInput | ItemOrcamentoCreateOrConnectWithoutOrcamentoInput[]
    createMany?: ItemOrcamentoCreateManyOrcamentoInputEnvelope
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedOneWithoutOrcamentoInput = {
    create?: XOR<PagamentoCreateWithoutOrcamentoInput, PagamentoUncheckedCreateWithoutOrcamentoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutOrcamentoInput
    connect?: PagamentoWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutOrcamentosNestedInput = {
    create?: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrcamentosInput
    upsert?: ClienteUpsertWithoutOrcamentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutOrcamentosInput, ClienteUpdateWithoutOrcamentosInput>, ClienteUncheckedUpdateWithoutOrcamentosInput>
  }

  export type ItemOrcamentoUpdateManyWithoutOrcamentoNestedInput = {
    create?: XOR<ItemOrcamentoCreateWithoutOrcamentoInput, ItemOrcamentoUncheckedCreateWithoutOrcamentoInput> | ItemOrcamentoCreateWithoutOrcamentoInput[] | ItemOrcamentoUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutOrcamentoInput | ItemOrcamentoCreateOrConnectWithoutOrcamentoInput[]
    upsert?: ItemOrcamentoUpsertWithWhereUniqueWithoutOrcamentoInput | ItemOrcamentoUpsertWithWhereUniqueWithoutOrcamentoInput[]
    createMany?: ItemOrcamentoCreateManyOrcamentoInputEnvelope
    set?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    disconnect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    delete?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    update?: ItemOrcamentoUpdateWithWhereUniqueWithoutOrcamentoInput | ItemOrcamentoUpdateWithWhereUniqueWithoutOrcamentoInput[]
    updateMany?: ItemOrcamentoUpdateManyWithWhereWithoutOrcamentoInput | ItemOrcamentoUpdateManyWithWhereWithoutOrcamentoInput[]
    deleteMany?: ItemOrcamentoScalarWhereInput | ItemOrcamentoScalarWhereInput[]
  }

  export type LojaUpdateOneRequiredWithoutOrcamentosNestedInput = {
    create?: XOR<LojaCreateWithoutOrcamentosInput, LojaUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutOrcamentosInput
    upsert?: LojaUpsertWithoutOrcamentosInput
    connect?: LojaWhereUniqueInput
    update?: XOR<XOR<LojaUpdateToOneWithWhereWithoutOrcamentosInput, LojaUpdateWithoutOrcamentosInput>, LojaUncheckedUpdateWithoutOrcamentosInput>
  }

  export type PagamentoUpdateOneWithoutOrcamentoNestedInput = {
    create?: XOR<PagamentoCreateWithoutOrcamentoInput, PagamentoUncheckedCreateWithoutOrcamentoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutOrcamentoInput
    upsert?: PagamentoUpsertWithoutOrcamentoInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutOrcamentoInput, PagamentoUpdateWithoutOrcamentoInput>, PagamentoUncheckedUpdateWithoutOrcamentoInput>
  }

  export type ItemOrcamentoUncheckedUpdateManyWithoutOrcamentoNestedInput = {
    create?: XOR<ItemOrcamentoCreateWithoutOrcamentoInput, ItemOrcamentoUncheckedCreateWithoutOrcamentoInput> | ItemOrcamentoCreateWithoutOrcamentoInput[] | ItemOrcamentoUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: ItemOrcamentoCreateOrConnectWithoutOrcamentoInput | ItemOrcamentoCreateOrConnectWithoutOrcamentoInput[]
    upsert?: ItemOrcamentoUpsertWithWhereUniqueWithoutOrcamentoInput | ItemOrcamentoUpsertWithWhereUniqueWithoutOrcamentoInput[]
    createMany?: ItemOrcamentoCreateManyOrcamentoInputEnvelope
    set?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    disconnect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    delete?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    connect?: ItemOrcamentoWhereUniqueInput | ItemOrcamentoWhereUniqueInput[]
    update?: ItemOrcamentoUpdateWithWhereUniqueWithoutOrcamentoInput | ItemOrcamentoUpdateWithWhereUniqueWithoutOrcamentoInput[]
    updateMany?: ItemOrcamentoUpdateManyWithWhereWithoutOrcamentoInput | ItemOrcamentoUpdateManyWithWhereWithoutOrcamentoInput[]
    deleteMany?: ItemOrcamentoScalarWhereInput | ItemOrcamentoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateOneWithoutOrcamentoNestedInput = {
    create?: XOR<PagamentoCreateWithoutOrcamentoInput, PagamentoUncheckedCreateWithoutOrcamentoInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutOrcamentoInput
    upsert?: PagamentoUpsertWithoutOrcamentoInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutOrcamentoInput, PagamentoUpdateWithoutOrcamentoInput>, PagamentoUncheckedUpdateWithoutOrcamentoInput>
  }

  export type OrcamentoCreateNestedOneWithoutItensInput = {
    create?: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
    connectOrCreate?: OrcamentoCreateOrConnectWithoutItensInput
    connect?: OrcamentoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensOrcamentoInput = {
    create?: XOR<ProdutoCreateWithoutItensOrcamentoInput, ProdutoUncheckedCreateWithoutItensOrcamentoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensOrcamentoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type OrcamentoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
    connectOrCreate?: OrcamentoCreateOrConnectWithoutItensInput
    upsert?: OrcamentoUpsertWithoutItensInput
    connect?: OrcamentoWhereUniqueInput
    update?: XOR<XOR<OrcamentoUpdateToOneWithWhereWithoutItensInput, OrcamentoUpdateWithoutItensInput>, OrcamentoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneWithoutItensOrcamentoNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensOrcamentoInput, ProdutoUncheckedCreateWithoutItensOrcamentoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensOrcamentoInput
    upsert?: ProdutoUpsertWithoutItensOrcamentoInput
    disconnect?: ProdutoWhereInput | boolean
    delete?: ProdutoWhereInput | boolean
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensOrcamentoInput, ProdutoUpdateWithoutItensOrcamentoInput>, ProdutoUncheckedUpdateWithoutItensOrcamentoInput>
  }

  export type OrcamentoCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<OrcamentoCreateWithoutPagamentoInput, OrcamentoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: OrcamentoCreateOrConnectWithoutPagamentoInput
    connect?: OrcamentoWhereUniqueInput
  }

  export type LojaCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<LojaCreateWithoutPagamentosInput, LojaUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutPagamentosInput
    connect?: LojaWhereUniqueInput
  }

  export type FluxoCaixaCreateNestedManyWithoutPagamentoInput = {
    create?: XOR<FluxoCaixaCreateWithoutPagamentoInput, FluxoCaixaUncheckedCreateWithoutPagamentoInput> | FluxoCaixaCreateWithoutPagamentoInput[] | FluxoCaixaUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutPagamentoInput | FluxoCaixaCreateOrConnectWithoutPagamentoInput[]
    createMany?: FluxoCaixaCreateManyPagamentoInputEnvelope
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
  }

  export type FluxoCaixaUncheckedCreateNestedManyWithoutPagamentoInput = {
    create?: XOR<FluxoCaixaCreateWithoutPagamentoInput, FluxoCaixaUncheckedCreateWithoutPagamentoInput> | FluxoCaixaCreateWithoutPagamentoInput[] | FluxoCaixaUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutPagamentoInput | FluxoCaixaCreateOrConnectWithoutPagamentoInput[]
    createMany?: FluxoCaixaCreateManyPagamentoInputEnvelope
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
  }

  export type EnumMetodoPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPagamento
  }

  export type EnumStatusPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPagamento
  }

  export type OrcamentoUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<OrcamentoCreateWithoutPagamentoInput, OrcamentoUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: OrcamentoCreateOrConnectWithoutPagamentoInput
    upsert?: OrcamentoUpsertWithoutPagamentoInput
    connect?: OrcamentoWhereUniqueInput
    update?: XOR<XOR<OrcamentoUpdateToOneWithWhereWithoutPagamentoInput, OrcamentoUpdateWithoutPagamentoInput>, OrcamentoUncheckedUpdateWithoutPagamentoInput>
  }

  export type LojaUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<LojaCreateWithoutPagamentosInput, LojaUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: LojaCreateOrConnectWithoutPagamentosInput
    upsert?: LojaUpsertWithoutPagamentosInput
    connect?: LojaWhereUniqueInput
    update?: XOR<XOR<LojaUpdateToOneWithWhereWithoutPagamentosInput, LojaUpdateWithoutPagamentosInput>, LojaUncheckedUpdateWithoutPagamentosInput>
  }

  export type FluxoCaixaUpdateManyWithoutPagamentoNestedInput = {
    create?: XOR<FluxoCaixaCreateWithoutPagamentoInput, FluxoCaixaUncheckedCreateWithoutPagamentoInput> | FluxoCaixaCreateWithoutPagamentoInput[] | FluxoCaixaUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutPagamentoInput | FluxoCaixaCreateOrConnectWithoutPagamentoInput[]
    upsert?: FluxoCaixaUpsertWithWhereUniqueWithoutPagamentoInput | FluxoCaixaUpsertWithWhereUniqueWithoutPagamentoInput[]
    createMany?: FluxoCaixaCreateManyPagamentoInputEnvelope
    set?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    disconnect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    delete?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    update?: FluxoCaixaUpdateWithWhereUniqueWithoutPagamentoInput | FluxoCaixaUpdateWithWhereUniqueWithoutPagamentoInput[]
    updateMany?: FluxoCaixaUpdateManyWithWhereWithoutPagamentoInput | FluxoCaixaUpdateManyWithWhereWithoutPagamentoInput[]
    deleteMany?: FluxoCaixaScalarWhereInput | FluxoCaixaScalarWhereInput[]
  }

  export type FluxoCaixaUncheckedUpdateManyWithoutPagamentoNestedInput = {
    create?: XOR<FluxoCaixaCreateWithoutPagamentoInput, FluxoCaixaUncheckedCreateWithoutPagamentoInput> | FluxoCaixaCreateWithoutPagamentoInput[] | FluxoCaixaUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: FluxoCaixaCreateOrConnectWithoutPagamentoInput | FluxoCaixaCreateOrConnectWithoutPagamentoInput[]
    upsert?: FluxoCaixaUpsertWithWhereUniqueWithoutPagamentoInput | FluxoCaixaUpsertWithWhereUniqueWithoutPagamentoInput[]
    createMany?: FluxoCaixaCreateManyPagamentoInputEnvelope
    set?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    disconnect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    delete?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    connect?: FluxoCaixaWhereUniqueInput | FluxoCaixaWhereUniqueInput[]
    update?: FluxoCaixaUpdateWithWhereUniqueWithoutPagamentoInput | FluxoCaixaUpdateWithWhereUniqueWithoutPagamentoInput[]
    updateMany?: FluxoCaixaUpdateManyWithWhereWithoutPagamentoInput | FluxoCaixaUpdateManyWithWhereWithoutPagamentoInput[]
    deleteMany?: FluxoCaixaScalarWhereInput | FluxoCaixaScalarWhereInput[]
  }

  export type PagamentoCreateNestedOneWithoutFluxosCaixaInput = {
    create?: XOR<PagamentoCreateWithoutFluxosCaixaInput, PagamentoUncheckedCreateWithoutFluxosCaixaInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutFluxosCaixaInput
    connect?: PagamentoWhereUniqueInput
  }

  export type LojaCreateNestedOneWithoutMovimentacoesFinanceirasInput = {
    create?: XOR<LojaCreateWithoutMovimentacoesFinanceirasInput, LojaUncheckedCreateWithoutMovimentacoesFinanceirasInput>
    connectOrCreate?: LojaCreateOrConnectWithoutMovimentacoesFinanceirasInput
    connect?: LojaWhereUniqueInput
  }

  export type PagamentoUpdateOneWithoutFluxosCaixaNestedInput = {
    create?: XOR<PagamentoCreateWithoutFluxosCaixaInput, PagamentoUncheckedCreateWithoutFluxosCaixaInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutFluxosCaixaInput
    upsert?: PagamentoUpsertWithoutFluxosCaixaInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutFluxosCaixaInput, PagamentoUpdateWithoutFluxosCaixaInput>, PagamentoUncheckedUpdateWithoutFluxosCaixaInput>
  }

  export type LojaUpdateOneRequiredWithoutMovimentacoesFinanceirasNestedInput = {
    create?: XOR<LojaCreateWithoutMovimentacoesFinanceirasInput, LojaUncheckedCreateWithoutMovimentacoesFinanceirasInput>
    connectOrCreate?: LojaCreateOrConnectWithoutMovimentacoesFinanceirasInput
    upsert?: LojaUpsertWithoutMovimentacoesFinanceirasInput
    connect?: LojaWhereUniqueInput
    update?: XOR<XOR<LojaUpdateToOneWithWhereWithoutMovimentacoesFinanceirasInput, LojaUpdateWithoutMovimentacoesFinanceirasInput>, LojaUncheckedUpdateWithoutMovimentacoesFinanceirasInput>
  }

  export type ProdutoCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMovimentacoesInput
    connect?: ProdutoWhereUniqueInput
  }

  export type LojaCreateNestedOneWithoutMovimentacoesEstoqueInput = {
    create?: XOR<LojaCreateWithoutMovimentacoesEstoqueInput, LojaUncheckedCreateWithoutMovimentacoesEstoqueInput>
    connectOrCreate?: LojaCreateOrConnectWithoutMovimentacoesEstoqueInput
    connect?: LojaWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProdutoUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutMovimentacoesInput
    upsert?: ProdutoUpsertWithoutMovimentacoesInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutMovimentacoesInput, ProdutoUpdateWithoutMovimentacoesInput>, ProdutoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type LojaUpdateOneRequiredWithoutMovimentacoesEstoqueNestedInput = {
    create?: XOR<LojaCreateWithoutMovimentacoesEstoqueInput, LojaUncheckedCreateWithoutMovimentacoesEstoqueInput>
    connectOrCreate?: LojaCreateOrConnectWithoutMovimentacoesEstoqueInput
    upsert?: LojaUpsertWithoutMovimentacoesEstoqueInput
    connect?: LojaWhereUniqueInput
    update?: XOR<XOR<LojaUpdateToOneWithWhereWithoutMovimentacoesEstoqueInput, LojaUpdateWithoutMovimentacoesEstoqueInput>, LojaUncheckedUpdateWithoutMovimentacoesEstoqueInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumPerfilUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioFilter<$PrismaModel> | $Enums.PerfilUsuario
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

  export type NestedEnumPerfilUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerfilUsuario | EnumPerfilUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.PerfilUsuario[] | ListEnumPerfilUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.PerfilUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
    _max?: NestedEnumPerfilUsuarioFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoFilter<$PrismaModel> | $Enums.MetodoPagamento
  }

  export type NestedEnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
  }

  export type NestedEnumMetodoPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
  }

  export type NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutLojaInput = {
    id?: string
    email: string
    senha: string
    nome?: string | null
    perfil?: $Enums.PerfilUsuario
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    ultimoLogin?: Date | string | null
  }

  export type UsuarioUncheckedCreateWithoutLojaInput = {
    id?: string
    email: string
    senha: string
    nome?: string | null
    perfil?: $Enums.PerfilUsuario
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    ultimoLogin?: Date | string | null
  }

  export type UsuarioCreateOrConnectWithoutLojaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLojaInput, UsuarioUncheckedCreateWithoutLojaInput>
  }

  export type UsuarioCreateManyLojaInputEnvelope = {
    data: UsuarioCreateManyLojaInput | UsuarioCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoCreateWithoutLojaInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itensOrcamento?: ItemOrcamentoCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoEstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutLojaInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itensOrcamento?: ItemOrcamentoUncheckedCreateNestedManyWithoutProdutoInput
    movimentacoes?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutLojaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutLojaInput, ProdutoUncheckedCreateWithoutLojaInput>
  }

  export type ProdutoCreateManyLojaInputEnvelope = {
    data: ProdutoCreateManyLojaInput | ProdutoCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutLojaInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    orcamentos?: OrcamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutLojaInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutLojaInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutLojaInput, ClienteUncheckedCreateWithoutLojaInput>
  }

  export type ClienteCreateManyLojaInputEnvelope = {
    data: ClienteCreateManyLojaInput | ClienteCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type OrcamentoCreateWithoutLojaInput = {
    id?: string
    codigo: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrcamentosInput
    itens?: ItemOrcamentoCreateNestedManyWithoutOrcamentoInput
    pagamento?: PagamentoCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoUncheckedCreateWithoutLojaInput = {
    id?: string
    codigo: string
    clienteId: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itens?: ItemOrcamentoUncheckedCreateNestedManyWithoutOrcamentoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoCreateOrConnectWithoutLojaInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutLojaInput, OrcamentoUncheckedCreateWithoutLojaInput>
  }

  export type OrcamentoCreateManyLojaInputEnvelope = {
    data: OrcamentoCreateManyLojaInput | OrcamentoCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type PagamentoCreateWithoutLojaInput = {
    id?: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    orcamento: OrcamentoCreateNestedOneWithoutPagamentoInput
    fluxosCaixa?: FluxoCaixaCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateWithoutLojaInput = {
    id?: string
    orcamentoId: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    fluxosCaixa?: FluxoCaixaUncheckedCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoCreateOrConnectWithoutLojaInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutLojaInput, PagamentoUncheckedCreateWithoutLojaInput>
  }

  export type PagamentoCreateManyLojaInputEnvelope = {
    data: PagamentoCreateManyLojaInput | PagamentoCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type FluxoCaixaCreateWithoutLojaInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    pagamento?: PagamentoCreateNestedOneWithoutFluxosCaixaInput
  }

  export type FluxoCaixaUncheckedCreateWithoutLojaInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    pagamentoId?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type FluxoCaixaCreateOrConnectWithoutLojaInput = {
    where: FluxoCaixaWhereUniqueInput
    create: XOR<FluxoCaixaCreateWithoutLojaInput, FluxoCaixaUncheckedCreateWithoutLojaInput>
  }

  export type FluxoCaixaCreateManyLojaInputEnvelope = {
    data: FluxoCaixaCreateManyLojaInput | FluxoCaixaCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoEstoqueCreateWithoutLojaInput = {
    id?: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    produto: ProdutoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoEstoqueUncheckedCreateWithoutLojaInput = {
    id?: string
    produtoId: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type MovimentacaoEstoqueCreateOrConnectWithoutLojaInput = {
    where: MovimentacaoEstoqueWhereUniqueInput
    create: XOR<MovimentacaoEstoqueCreateWithoutLojaInput, MovimentacaoEstoqueUncheckedCreateWithoutLojaInput>
  }

  export type MovimentacaoEstoqueCreateManyLojaInputEnvelope = {
    data: MovimentacaoEstoqueCreateManyLojaInput | MovimentacaoEstoqueCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutLojaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutLojaInput, UsuarioUncheckedUpdateWithoutLojaInput>
    create: XOR<UsuarioCreateWithoutLojaInput, UsuarioUncheckedCreateWithoutLojaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutLojaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutLojaInput, UsuarioUncheckedUpdateWithoutLojaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutLojaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutLojaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringNullableFilter<"Usuario"> | string | null
    perfil?: EnumPerfilUsuarioFilter<"Usuario"> | $Enums.PerfilUsuario
    lojaId?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Usuario"> | Date | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
  }

  export type ProdutoUpsertWithWhereUniqueWithoutLojaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutLojaInput, ProdutoUncheckedUpdateWithoutLojaInput>
    create: XOR<ProdutoCreateWithoutLojaInput, ProdutoUncheckedCreateWithoutLojaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutLojaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutLojaInput, ProdutoUncheckedUpdateWithoutLojaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutLojaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutLojaInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    codigoBarras?: StringNullableFilter<"Produto"> | string | null
    quantidade?: IntFilter<"Produto"> | number
    precoCusto?: FloatFilter<"Produto"> | number
    precoVenda?: FloatFilter<"Produto"> | number
    categoria?: StringNullableFilter<"Produto"> | string | null
    lojaId?: StringFilter<"Produto"> | string
    dataCriacao?: DateTimeFilter<"Produto"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Produto"> | Date | string
  }

  export type ClienteUpsertWithWhereUniqueWithoutLojaInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutLojaInput, ClienteUncheckedUpdateWithoutLojaInput>
    create: XOR<ClienteCreateWithoutLojaInput, ClienteUncheckedCreateWithoutLojaInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutLojaInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutLojaInput, ClienteUncheckedUpdateWithoutLojaInput>
  }

  export type ClienteUpdateManyWithWhereWithoutLojaInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutLojaInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    telefone?: StringFilter<"Cliente"> | string
    documento?: StringNullableFilter<"Cliente"> | string | null
    endereco?: StringNullableFilter<"Cliente"> | string | null
    lojaId?: StringFilter<"Cliente"> | string
    dataCriacao?: DateTimeFilter<"Cliente"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Cliente"> | Date | string
  }

  export type OrcamentoUpsertWithWhereUniqueWithoutLojaInput = {
    where: OrcamentoWhereUniqueInput
    update: XOR<OrcamentoUpdateWithoutLojaInput, OrcamentoUncheckedUpdateWithoutLojaInput>
    create: XOR<OrcamentoCreateWithoutLojaInput, OrcamentoUncheckedCreateWithoutLojaInput>
  }

  export type OrcamentoUpdateWithWhereUniqueWithoutLojaInput = {
    where: OrcamentoWhereUniqueInput
    data: XOR<OrcamentoUpdateWithoutLojaInput, OrcamentoUncheckedUpdateWithoutLojaInput>
  }

  export type OrcamentoUpdateManyWithWhereWithoutLojaInput = {
    where: OrcamentoScalarWhereInput
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyWithoutLojaInput>
  }

  export type OrcamentoScalarWhereInput = {
    AND?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
    OR?: OrcamentoScalarWhereInput[]
    NOT?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
    id?: StringFilter<"Orcamento"> | string
    codigo?: StringFilter<"Orcamento"> | string
    clienteId?: StringFilter<"Orcamento"> | string
    desconto?: FloatFilter<"Orcamento"> | number
    valorTotal?: FloatFilter<"Orcamento"> | number
    observacoes?: StringNullableFilter<"Orcamento"> | string | null
    status?: StringFilter<"Orcamento"> | string
    lojaId?: StringFilter<"Orcamento"> | string
    dataCriacao?: DateTimeFilter<"Orcamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Orcamento"> | Date | string
  }

  export type PagamentoUpsertWithWhereUniqueWithoutLojaInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutLojaInput, PagamentoUncheckedUpdateWithoutLojaInput>
    create: XOR<PagamentoCreateWithoutLojaInput, PagamentoUncheckedCreateWithoutLojaInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutLojaInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutLojaInput, PagamentoUncheckedUpdateWithoutLojaInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutLojaInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutLojaInput>
  }

  export type PagamentoScalarWhereInput = {
    AND?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    OR?: PagamentoScalarWhereInput[]
    NOT?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    id?: StringFilter<"Pagamento"> | string
    orcamentoId?: StringFilter<"Pagamento"> | string
    metodo?: EnumMetodoPagamentoFilter<"Pagamento"> | $Enums.MetodoPagamento
    valor?: FloatFilter<"Pagamento"> | number
    parcelas?: IntFilter<"Pagamento"> | number
    taxaJuros?: FloatFilter<"Pagamento"> | number
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    datasVencimento?: JsonNullableFilter<"Pagamento">
    lojaId?: StringFilter<"Pagamento"> | string
    dataCriacao?: DateTimeFilter<"Pagamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Pagamento"> | Date | string
  }

  export type FluxoCaixaUpsertWithWhereUniqueWithoutLojaInput = {
    where: FluxoCaixaWhereUniqueInput
    update: XOR<FluxoCaixaUpdateWithoutLojaInput, FluxoCaixaUncheckedUpdateWithoutLojaInput>
    create: XOR<FluxoCaixaCreateWithoutLojaInput, FluxoCaixaUncheckedCreateWithoutLojaInput>
  }

  export type FluxoCaixaUpdateWithWhereUniqueWithoutLojaInput = {
    where: FluxoCaixaWhereUniqueInput
    data: XOR<FluxoCaixaUpdateWithoutLojaInput, FluxoCaixaUncheckedUpdateWithoutLojaInput>
  }

  export type FluxoCaixaUpdateManyWithWhereWithoutLojaInput = {
    where: FluxoCaixaScalarWhereInput
    data: XOR<FluxoCaixaUpdateManyMutationInput, FluxoCaixaUncheckedUpdateManyWithoutLojaInput>
  }

  export type FluxoCaixaScalarWhereInput = {
    AND?: FluxoCaixaScalarWhereInput | FluxoCaixaScalarWhereInput[]
    OR?: FluxoCaixaScalarWhereInput[]
    NOT?: FluxoCaixaScalarWhereInput | FluxoCaixaScalarWhereInput[]
    id?: StringFilter<"FluxoCaixa"> | string
    tipo?: StringFilter<"FluxoCaixa"> | string
    valor?: FloatFilter<"FluxoCaixa"> | number
    metodo?: EnumMetodoPagamentoFilter<"FluxoCaixa"> | $Enums.MetodoPagamento
    categoria?: StringNullableFilter<"FluxoCaixa"> | string | null
    descricao?: StringFilter<"FluxoCaixa"> | string
    pagamentoId?: StringNullableFilter<"FluxoCaixa"> | string | null
    lojaId?: StringFilter<"FluxoCaixa"> | string
    dataCriacao?: DateTimeFilter<"FluxoCaixa"> | Date | string
    dataAtualizacao?: DateTimeFilter<"FluxoCaixa"> | Date | string
  }

  export type MovimentacaoEstoqueUpsertWithWhereUniqueWithoutLojaInput = {
    where: MovimentacaoEstoqueWhereUniqueInput
    update: XOR<MovimentacaoEstoqueUpdateWithoutLojaInput, MovimentacaoEstoqueUncheckedUpdateWithoutLojaInput>
    create: XOR<MovimentacaoEstoqueCreateWithoutLojaInput, MovimentacaoEstoqueUncheckedCreateWithoutLojaInput>
  }

  export type MovimentacaoEstoqueUpdateWithWhereUniqueWithoutLojaInput = {
    where: MovimentacaoEstoqueWhereUniqueInput
    data: XOR<MovimentacaoEstoqueUpdateWithoutLojaInput, MovimentacaoEstoqueUncheckedUpdateWithoutLojaInput>
  }

  export type MovimentacaoEstoqueUpdateManyWithWhereWithoutLojaInput = {
    where: MovimentacaoEstoqueScalarWhereInput
    data: XOR<MovimentacaoEstoqueUpdateManyMutationInput, MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaInput>
  }

  export type MovimentacaoEstoqueScalarWhereInput = {
    AND?: MovimentacaoEstoqueScalarWhereInput | MovimentacaoEstoqueScalarWhereInput[]
    OR?: MovimentacaoEstoqueScalarWhereInput[]
    NOT?: MovimentacaoEstoqueScalarWhereInput | MovimentacaoEstoqueScalarWhereInput[]
    id?: StringFilter<"MovimentacaoEstoque"> | string
    produtoId?: StringFilter<"MovimentacaoEstoque"> | string
    tipo?: StringFilter<"MovimentacaoEstoque"> | string
    quantidade?: IntFilter<"MovimentacaoEstoque"> | number
    precoUnitario?: FloatNullableFilter<"MovimentacaoEstoque"> | number | null
    motivo?: StringNullableFilter<"MovimentacaoEstoque"> | string | null
    lojaId?: StringFilter<"MovimentacaoEstoque"> | string
    dataCriacao?: DateTimeFilter<"MovimentacaoEstoque"> | Date | string
    dataAtualizacao?: DateTimeFilter<"MovimentacaoEstoque"> | Date | string
  }

  export type LojaCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    produtos?: ProdutoCreateNestedManyWithoutLojaInput
    clientes?: ClienteCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    produtos?: ProdutoUncheckedCreateNestedManyWithoutLojaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaCreateOrConnectWithoutUsuariosInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutUsuariosInput, LojaUncheckedCreateWithoutUsuariosInput>
  }

  export type LojaUpsertWithoutUsuariosInput = {
    update: XOR<LojaUpdateWithoutUsuariosInput, LojaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<LojaCreateWithoutUsuariosInput, LojaUncheckedCreateWithoutUsuariosInput>
    where?: LojaWhereInput
  }

  export type LojaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: LojaWhereInput
    data: XOR<LojaUpdateWithoutUsuariosInput, LojaUncheckedUpdateWithoutUsuariosInput>
  }

  export type LojaUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    produtos?: ProdutoUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    produtos?: ProdutoUncheckedUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type LojaCreateWithoutProdutosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioCreateNestedManyWithoutLojaInput
    clientes?: ClienteCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateWithoutProdutosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLojaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaCreateOrConnectWithoutProdutosInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutProdutosInput, LojaUncheckedCreateWithoutProdutosInput>
  }

  export type ItemOrcamentoCreateWithoutProdutoInput = {
    id?: string
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
    orcamento: OrcamentoCreateNestedOneWithoutItensInput
  }

  export type ItemOrcamentoUncheckedCreateWithoutProdutoInput = {
    id?: string
    orcamentoId: string
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
  }

  export type ItemOrcamentoCreateOrConnectWithoutProdutoInput = {
    where: ItemOrcamentoWhereUniqueInput
    create: XOR<ItemOrcamentoCreateWithoutProdutoInput, ItemOrcamentoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemOrcamentoCreateManyProdutoInputEnvelope = {
    data: ItemOrcamentoCreateManyProdutoInput | ItemOrcamentoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoEstoqueCreateWithoutProdutoInput = {
    id?: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutMovimentacoesEstoqueInput
  }

  export type MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput = {
    id?: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type MovimentacaoEstoqueCreateOrConnectWithoutProdutoInput = {
    where: MovimentacaoEstoqueWhereUniqueInput
    create: XOR<MovimentacaoEstoqueCreateWithoutProdutoInput, MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentacaoEstoqueCreateManyProdutoInputEnvelope = {
    data: MovimentacaoEstoqueCreateManyProdutoInput | MovimentacaoEstoqueCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type LojaUpsertWithoutProdutosInput = {
    update: XOR<LojaUpdateWithoutProdutosInput, LojaUncheckedUpdateWithoutProdutosInput>
    create: XOR<LojaCreateWithoutProdutosInput, LojaUncheckedCreateWithoutProdutosInput>
    where?: LojaWhereInput
  }

  export type LojaUpdateToOneWithWhereWithoutProdutosInput = {
    where?: LojaWhereInput
    data: XOR<LojaUpdateWithoutProdutosInput, LojaUncheckedUpdateWithoutProdutosInput>
  }

  export type LojaUpdateWithoutProdutosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateWithoutProdutosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type ItemOrcamentoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemOrcamentoWhereUniqueInput
    update: XOR<ItemOrcamentoUpdateWithoutProdutoInput, ItemOrcamentoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemOrcamentoCreateWithoutProdutoInput, ItemOrcamentoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemOrcamentoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemOrcamentoWhereUniqueInput
    data: XOR<ItemOrcamentoUpdateWithoutProdutoInput, ItemOrcamentoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemOrcamentoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemOrcamentoScalarWhereInput
    data: XOR<ItemOrcamentoUpdateManyMutationInput, ItemOrcamentoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemOrcamentoScalarWhereInput = {
    AND?: ItemOrcamentoScalarWhereInput | ItemOrcamentoScalarWhereInput[]
    OR?: ItemOrcamentoScalarWhereInput[]
    NOT?: ItemOrcamentoScalarWhereInput | ItemOrcamentoScalarWhereInput[]
    id?: StringFilter<"ItemOrcamento"> | string
    orcamentoId?: StringFilter<"ItemOrcamento"> | string
    produtoId?: StringNullableFilter<"ItemOrcamento"> | string | null
    servico?: StringNullableFilter<"ItemOrcamento"> | string | null
    quantidade?: IntFilter<"ItemOrcamento"> | number
    precoUnitario?: FloatFilter<"ItemOrcamento"> | number
    desconto?: FloatFilter<"ItemOrcamento"> | number
    total?: FloatFilter<"ItemOrcamento"> | number
  }

  export type MovimentacaoEstoqueUpsertWithWhereUniqueWithoutProdutoInput = {
    where: MovimentacaoEstoqueWhereUniqueInput
    update: XOR<MovimentacaoEstoqueUpdateWithoutProdutoInput, MovimentacaoEstoqueUncheckedUpdateWithoutProdutoInput>
    create: XOR<MovimentacaoEstoqueCreateWithoutProdutoInput, MovimentacaoEstoqueUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentacaoEstoqueUpdateWithWhereUniqueWithoutProdutoInput = {
    where: MovimentacaoEstoqueWhereUniqueInput
    data: XOR<MovimentacaoEstoqueUpdateWithoutProdutoInput, MovimentacaoEstoqueUncheckedUpdateWithoutProdutoInput>
  }

  export type MovimentacaoEstoqueUpdateManyWithWhereWithoutProdutoInput = {
    where: MovimentacaoEstoqueScalarWhereInput
    data: XOR<MovimentacaoEstoqueUpdateManyMutationInput, MovimentacaoEstoqueUncheckedUpdateManyWithoutProdutoInput>
  }

  export type LojaCreateWithoutClientesInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioCreateNestedManyWithoutLojaInput
    produtos?: ProdutoCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateWithoutClientesInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLojaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaCreateOrConnectWithoutClientesInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutClientesInput, LojaUncheckedCreateWithoutClientesInput>
  }

  export type OrcamentoCreateWithoutClienteInput = {
    id?: string
    codigo: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itens?: ItemOrcamentoCreateNestedManyWithoutOrcamentoInput
    loja: LojaCreateNestedOneWithoutOrcamentosInput
    pagamento?: PagamentoCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoUncheckedCreateWithoutClienteInput = {
    id?: string
    codigo: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itens?: ItemOrcamentoUncheckedCreateNestedManyWithoutOrcamentoInput
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoCreateOrConnectWithoutClienteInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput>
  }

  export type OrcamentoCreateManyClienteInputEnvelope = {
    data: OrcamentoCreateManyClienteInput | OrcamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type LojaUpsertWithoutClientesInput = {
    update: XOR<LojaUpdateWithoutClientesInput, LojaUncheckedUpdateWithoutClientesInput>
    create: XOR<LojaCreateWithoutClientesInput, LojaUncheckedCreateWithoutClientesInput>
    where?: LojaWhereInput
  }

  export type LojaUpdateToOneWithWhereWithoutClientesInput = {
    where?: LojaWhereInput
    data: XOR<LojaUpdateWithoutClientesInput, LojaUncheckedUpdateWithoutClientesInput>
  }

  export type LojaUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type OrcamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: OrcamentoWhereUniqueInput
    update: XOR<OrcamentoUpdateWithoutClienteInput, OrcamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput>
  }

  export type OrcamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: OrcamentoWhereUniqueInput
    data: XOR<OrcamentoUpdateWithoutClienteInput, OrcamentoUncheckedUpdateWithoutClienteInput>
  }

  export type OrcamentoUpdateManyWithWhereWithoutClienteInput = {
    where: OrcamentoScalarWhereInput
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ClienteCreateOrConnectWithoutOrcamentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
  }

  export type ItemOrcamentoCreateWithoutOrcamentoInput = {
    id?: string
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
    produto?: ProdutoCreateNestedOneWithoutItensOrcamentoInput
  }

  export type ItemOrcamentoUncheckedCreateWithoutOrcamentoInput = {
    id?: string
    produtoId?: string | null
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
  }

  export type ItemOrcamentoCreateOrConnectWithoutOrcamentoInput = {
    where: ItemOrcamentoWhereUniqueInput
    create: XOR<ItemOrcamentoCreateWithoutOrcamentoInput, ItemOrcamentoUncheckedCreateWithoutOrcamentoInput>
  }

  export type ItemOrcamentoCreateManyOrcamentoInputEnvelope = {
    data: ItemOrcamentoCreateManyOrcamentoInput | ItemOrcamentoCreateManyOrcamentoInput[]
    skipDuplicates?: boolean
  }

  export type LojaCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioCreateNestedManyWithoutLojaInput
    produtos?: ProdutoCreateNestedManyWithoutLojaInput
    clientes?: ClienteCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateWithoutOrcamentosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLojaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutLojaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaCreateOrConnectWithoutOrcamentosInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutOrcamentosInput, LojaUncheckedCreateWithoutOrcamentosInput>
  }

  export type PagamentoCreateWithoutOrcamentoInput = {
    id?: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutPagamentosInput
    fluxosCaixa?: FluxoCaixaCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateWithoutOrcamentoInput = {
    id?: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    fluxosCaixa?: FluxoCaixaUncheckedCreateNestedManyWithoutPagamentoInput
  }

  export type PagamentoCreateOrConnectWithoutOrcamentoInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutOrcamentoInput, PagamentoUncheckedCreateWithoutOrcamentoInput>
  }

  export type ClienteUpsertWithoutOrcamentosInput = {
    update: XOR<ClienteUpdateWithoutOrcamentosInput, ClienteUncheckedUpdateWithoutOrcamentosInput>
    create: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutOrcamentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutOrcamentosInput, ClienteUncheckedUpdateWithoutOrcamentosInput>
  }

  export type ClienteUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemOrcamentoUpsertWithWhereUniqueWithoutOrcamentoInput = {
    where: ItemOrcamentoWhereUniqueInput
    update: XOR<ItemOrcamentoUpdateWithoutOrcamentoInput, ItemOrcamentoUncheckedUpdateWithoutOrcamentoInput>
    create: XOR<ItemOrcamentoCreateWithoutOrcamentoInput, ItemOrcamentoUncheckedCreateWithoutOrcamentoInput>
  }

  export type ItemOrcamentoUpdateWithWhereUniqueWithoutOrcamentoInput = {
    where: ItemOrcamentoWhereUniqueInput
    data: XOR<ItemOrcamentoUpdateWithoutOrcamentoInput, ItemOrcamentoUncheckedUpdateWithoutOrcamentoInput>
  }

  export type ItemOrcamentoUpdateManyWithWhereWithoutOrcamentoInput = {
    where: ItemOrcamentoScalarWhereInput
    data: XOR<ItemOrcamentoUpdateManyMutationInput, ItemOrcamentoUncheckedUpdateManyWithoutOrcamentoInput>
  }

  export type LojaUpsertWithoutOrcamentosInput = {
    update: XOR<LojaUpdateWithoutOrcamentosInput, LojaUncheckedUpdateWithoutOrcamentosInput>
    create: XOR<LojaCreateWithoutOrcamentosInput, LojaUncheckedCreateWithoutOrcamentosInput>
    where?: LojaWhereInput
  }

  export type LojaUpdateToOneWithWhereWithoutOrcamentosInput = {
    where?: LojaWhereInput
    data: XOR<LojaUpdateWithoutOrcamentosInput, LojaUncheckedUpdateWithoutOrcamentosInput>
  }

  export type LojaUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateWithoutOrcamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type PagamentoUpsertWithoutOrcamentoInput = {
    update: XOR<PagamentoUpdateWithoutOrcamentoInput, PagamentoUncheckedUpdateWithoutOrcamentoInput>
    create: XOR<PagamentoCreateWithoutOrcamentoInput, PagamentoUncheckedCreateWithoutOrcamentoInput>
    where?: PagamentoWhereInput
  }

  export type PagamentoUpdateToOneWithWhereWithoutOrcamentoInput = {
    where?: PagamentoWhereInput
    data: XOR<PagamentoUpdateWithoutOrcamentoInput, PagamentoUncheckedUpdateWithoutOrcamentoInput>
  }

  export type PagamentoUpdateWithoutOrcamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutPagamentosNestedInput
    fluxosCaixa?: FluxoCaixaUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutOrcamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fluxosCaixa?: FluxoCaixaUncheckedUpdateManyWithoutPagamentoNestedInput
  }

  export type OrcamentoCreateWithoutItensInput = {
    id?: string
    codigo: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrcamentosInput
    loja: LojaCreateNestedOneWithoutOrcamentosInput
    pagamento?: PagamentoCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoUncheckedCreateWithoutItensInput = {
    id?: string
    codigo: string
    clienteId: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutOrcamentoInput
  }

  export type OrcamentoCreateOrConnectWithoutItensInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutItensOrcamentoInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutProdutosInput
    movimentacoes?: MovimentacaoEstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutItensOrcamentoInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    movimentacoes?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutItensOrcamentoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensOrcamentoInput, ProdutoUncheckedCreateWithoutItensOrcamentoInput>
  }

  export type OrcamentoUpsertWithoutItensInput = {
    update: XOR<OrcamentoUpdateWithoutItensInput, OrcamentoUncheckedUpdateWithoutItensInput>
    create: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
    where?: OrcamentoWhereInput
  }

  export type OrcamentoUpdateToOneWithWhereWithoutItensInput = {
    where?: OrcamentoWhereInput
    data: XOR<OrcamentoUpdateWithoutItensInput, OrcamentoUncheckedUpdateWithoutItensInput>
  }

  export type OrcamentoUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrcamentosNestedInput
    loja?: LojaUpdateOneRequiredWithoutOrcamentosNestedInput
    pagamento?: PagamentoUpdateOneWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: PagamentoUncheckedUpdateOneWithoutOrcamentoNestedInput
  }

  export type ProdutoUpsertWithoutItensOrcamentoInput = {
    update: XOR<ProdutoUpdateWithoutItensOrcamentoInput, ProdutoUncheckedUpdateWithoutItensOrcamentoInput>
    create: XOR<ProdutoCreateWithoutItensOrcamentoInput, ProdutoUncheckedCreateWithoutItensOrcamentoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensOrcamentoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensOrcamentoInput, ProdutoUncheckedUpdateWithoutItensOrcamentoInput>
  }

  export type ProdutoUpdateWithoutItensOrcamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutProdutosNestedInput
    movimentacoes?: MovimentacaoEstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensOrcamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacoes?: MovimentacaoEstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type OrcamentoCreateWithoutPagamentoInput = {
    id?: string
    codigo: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrcamentosInput
    itens?: ItemOrcamentoCreateNestedManyWithoutOrcamentoInput
    loja: LojaCreateNestedOneWithoutOrcamentosInput
  }

  export type OrcamentoUncheckedCreateWithoutPagamentoInput = {
    id?: string
    codigo: string
    clienteId: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itens?: ItemOrcamentoUncheckedCreateNestedManyWithoutOrcamentoInput
  }

  export type OrcamentoCreateOrConnectWithoutPagamentoInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutPagamentoInput, OrcamentoUncheckedCreateWithoutPagamentoInput>
  }

  export type LojaCreateWithoutPagamentosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioCreateNestedManyWithoutLojaInput
    produtos?: ProdutoCreateNestedManyWithoutLojaInput
    clientes?: ClienteCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateWithoutPagamentosInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLojaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutLojaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaCreateOrConnectWithoutPagamentosInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutPagamentosInput, LojaUncheckedCreateWithoutPagamentosInput>
  }

  export type FluxoCaixaCreateWithoutPagamentoInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutMovimentacoesFinanceirasInput
  }

  export type FluxoCaixaUncheckedCreateWithoutPagamentoInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type FluxoCaixaCreateOrConnectWithoutPagamentoInput = {
    where: FluxoCaixaWhereUniqueInput
    create: XOR<FluxoCaixaCreateWithoutPagamentoInput, FluxoCaixaUncheckedCreateWithoutPagamentoInput>
  }

  export type FluxoCaixaCreateManyPagamentoInputEnvelope = {
    data: FluxoCaixaCreateManyPagamentoInput | FluxoCaixaCreateManyPagamentoInput[]
    skipDuplicates?: boolean
  }

  export type OrcamentoUpsertWithoutPagamentoInput = {
    update: XOR<OrcamentoUpdateWithoutPagamentoInput, OrcamentoUncheckedUpdateWithoutPagamentoInput>
    create: XOR<OrcamentoCreateWithoutPagamentoInput, OrcamentoUncheckedCreateWithoutPagamentoInput>
    where?: OrcamentoWhereInput
  }

  export type OrcamentoUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: OrcamentoWhereInput
    data: XOR<OrcamentoUpdateWithoutPagamentoInput, OrcamentoUncheckedUpdateWithoutPagamentoInput>
  }

  export type OrcamentoUpdateWithoutPagamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrcamentosNestedInput
    itens?: ItemOrcamentoUpdateManyWithoutOrcamentoNestedInput
    loja?: LojaUpdateOneRequiredWithoutOrcamentosNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutPagamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemOrcamentoUncheckedUpdateManyWithoutOrcamentoNestedInput
  }

  export type LojaUpsertWithoutPagamentosInput = {
    update: XOR<LojaUpdateWithoutPagamentosInput, LojaUncheckedUpdateWithoutPagamentosInput>
    create: XOR<LojaCreateWithoutPagamentosInput, LojaUncheckedCreateWithoutPagamentosInput>
    where?: LojaWhereInput
  }

  export type LojaUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: LojaWhereInput
    data: XOR<LojaUpdateWithoutPagamentosInput, LojaUncheckedUpdateWithoutPagamentosInput>
  }

  export type LojaUpdateWithoutPagamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateWithoutPagamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type FluxoCaixaUpsertWithWhereUniqueWithoutPagamentoInput = {
    where: FluxoCaixaWhereUniqueInput
    update: XOR<FluxoCaixaUpdateWithoutPagamentoInput, FluxoCaixaUncheckedUpdateWithoutPagamentoInput>
    create: XOR<FluxoCaixaCreateWithoutPagamentoInput, FluxoCaixaUncheckedCreateWithoutPagamentoInput>
  }

  export type FluxoCaixaUpdateWithWhereUniqueWithoutPagamentoInput = {
    where: FluxoCaixaWhereUniqueInput
    data: XOR<FluxoCaixaUpdateWithoutPagamentoInput, FluxoCaixaUncheckedUpdateWithoutPagamentoInput>
  }

  export type FluxoCaixaUpdateManyWithWhereWithoutPagamentoInput = {
    where: FluxoCaixaScalarWhereInput
    data: XOR<FluxoCaixaUpdateManyMutationInput, FluxoCaixaUncheckedUpdateManyWithoutPagamentoInput>
  }

  export type PagamentoCreateWithoutFluxosCaixaInput = {
    id?: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    orcamento: OrcamentoCreateNestedOneWithoutPagamentoInput
    loja: LojaCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateWithoutFluxosCaixaInput = {
    id?: string
    orcamentoId: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PagamentoCreateOrConnectWithoutFluxosCaixaInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutFluxosCaixaInput, PagamentoUncheckedCreateWithoutFluxosCaixaInput>
  }

  export type LojaCreateWithoutMovimentacoesFinanceirasInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioCreateNestedManyWithoutLojaInput
    produtos?: ProdutoCreateNestedManyWithoutLojaInput
    clientes?: ClienteCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateWithoutMovimentacoesFinanceirasInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLojaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutLojaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaCreateOrConnectWithoutMovimentacoesFinanceirasInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutMovimentacoesFinanceirasInput, LojaUncheckedCreateWithoutMovimentacoesFinanceirasInput>
  }

  export type PagamentoUpsertWithoutFluxosCaixaInput = {
    update: XOR<PagamentoUpdateWithoutFluxosCaixaInput, PagamentoUncheckedUpdateWithoutFluxosCaixaInput>
    create: XOR<PagamentoCreateWithoutFluxosCaixaInput, PagamentoUncheckedCreateWithoutFluxosCaixaInput>
    where?: PagamentoWhereInput
  }

  export type PagamentoUpdateToOneWithWhereWithoutFluxosCaixaInput = {
    where?: PagamentoWhereInput
    data: XOR<PagamentoUpdateWithoutFluxosCaixaInput, PagamentoUncheckedUpdateWithoutFluxosCaixaInput>
  }

  export type PagamentoUpdateWithoutFluxosCaixaInput = {
    id?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: OrcamentoUpdateOneRequiredWithoutPagamentoNestedInput
    loja?: LojaUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutFluxosCaixaInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LojaUpsertWithoutMovimentacoesFinanceirasInput = {
    update: XOR<LojaUpdateWithoutMovimentacoesFinanceirasInput, LojaUncheckedUpdateWithoutMovimentacoesFinanceirasInput>
    create: XOR<LojaCreateWithoutMovimentacoesFinanceirasInput, LojaUncheckedCreateWithoutMovimentacoesFinanceirasInput>
    where?: LojaWhereInput
  }

  export type LojaUpdateToOneWithWhereWithoutMovimentacoesFinanceirasInput = {
    where?: LojaWhereInput
    data: XOR<LojaUpdateWithoutMovimentacoesFinanceirasInput, LojaUncheckedUpdateWithoutMovimentacoesFinanceirasInput>
  }

  export type LojaUpdateWithoutMovimentacoesFinanceirasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateWithoutMovimentacoesFinanceirasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesEstoque?: MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type ProdutoCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    loja: LojaCreateNestedOneWithoutProdutosInput
    itensOrcamento?: ItemOrcamentoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    itensOrcamento?: ItemOrcamentoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutMovimentacoesInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
  }

  export type LojaCreateWithoutMovimentacoesEstoqueInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioCreateNestedManyWithoutLojaInput
    produtos?: ProdutoCreateNestedManyWithoutLojaInput
    clientes?: ClienteCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaCreateNestedManyWithoutLojaInput
  }

  export type LojaUncheckedCreateWithoutMovimentacoesEstoqueInput = {
    id?: string
    nome: string
    codigoUrl: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutLojaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutLojaInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutLojaInput
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutLojaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutLojaInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedCreateNestedManyWithoutLojaInput
  }

  export type LojaCreateOrConnectWithoutMovimentacoesEstoqueInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutMovimentacoesEstoqueInput, LojaUncheckedCreateWithoutMovimentacoesEstoqueInput>
  }

  export type ProdutoUpsertWithoutMovimentacoesInput = {
    update: XOR<ProdutoUpdateWithoutMovimentacoesInput, ProdutoUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<ProdutoCreateWithoutMovimentacoesInput, ProdutoUncheckedCreateWithoutMovimentacoesInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutMovimentacoesInput, ProdutoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ProdutoUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutProdutosNestedInput
    itensOrcamento?: ItemOrcamentoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itensOrcamento?: ItemOrcamentoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type LojaUpsertWithoutMovimentacoesEstoqueInput = {
    update: XOR<LojaUpdateWithoutMovimentacoesEstoqueInput, LojaUncheckedUpdateWithoutMovimentacoesEstoqueInput>
    create: XOR<LojaCreateWithoutMovimentacoesEstoqueInput, LojaUncheckedCreateWithoutMovimentacoesEstoqueInput>
    where?: LojaWhereInput
  }

  export type LojaUpdateToOneWithWhereWithoutMovimentacoesEstoqueInput = {
    where?: LojaWhereInput
    data: XOR<LojaUpdateWithoutMovimentacoesEstoqueInput, LojaUncheckedUpdateWithoutMovimentacoesEstoqueInput>
  }

  export type LojaUpdateWithoutMovimentacoesEstoqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUpdateManyWithoutLojaNestedInput
  }

  export type LojaUncheckedUpdateWithoutMovimentacoesEstoqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigoUrl?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    configuracoes?: NullableJsonNullValueInput | InputJsonValue
    usuarios?: UsuarioUncheckedUpdateManyWithoutLojaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutLojaNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutLojaNestedInput
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutLojaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutLojaNestedInput
    movimentacoesFinanceiras?: FluxoCaixaUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type UsuarioCreateManyLojaInput = {
    id?: string
    email: string
    senha: string
    nome?: string | null
    perfil?: $Enums.PerfilUsuario
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    ultimoLogin?: Date | string | null
  }

  export type ProdutoCreateManyLojaInput = {
    id?: string
    nome: string
    descricao?: string | null
    codigoBarras?: string | null
    quantidade?: number
    precoCusto?: number
    precoVenda: number
    categoria?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ClienteCreateManyLojaInput = {
    id?: string
    nome: string
    email?: string | null
    telefone: string
    documento?: string | null
    endereco?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type OrcamentoCreateManyLojaInput = {
    id?: string
    codigo: string
    clienteId: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PagamentoCreateManyLojaInput = {
    id?: string
    orcamentoId: string
    metodo: $Enums.MetodoPagamento
    valor: number
    parcelas?: number
    taxaJuros?: number
    status?: $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type FluxoCaixaCreateManyLojaInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    pagamentoId?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type MovimentacaoEstoqueCreateManyLojaInput = {
    id?: string
    produtoId: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type UsuarioUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: EnumPerfilUsuarioFieldUpdateOperationsInput | $Enums.PerfilUsuario
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutoUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itensOrcamento?: ItemOrcamentoUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoEstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itensOrcamento?: ItemOrcamentoUncheckedUpdateManyWithoutProdutoNestedInput
    movimentacoes?: MovimentacaoEstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    precoVenda?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrcamentosNestedInput
    itens?: ItemOrcamentoUpdateManyWithoutOrcamentoNestedInput
    pagamento?: PagamentoUpdateOneWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemOrcamentoUncheckedUpdateManyWithoutOrcamentoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateManyWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: OrcamentoUpdateOneRequiredWithoutPagamentoNestedInput
    fluxosCaixa?: FluxoCaixaUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    fluxosCaixa?: FluxoCaixaUncheckedUpdateManyWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateManyWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    valor?: FloatFieldUpdateOperationsInput | number
    parcelas?: IntFieldUpdateOperationsInput | number
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    datasVencimento?: NullableJsonNullValueInput | InputJsonValue
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: PagamentoUpdateOneWithoutFluxosCaixaNestedInput
  }

  export type FluxoCaixaUncheckedUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    pagamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaUncheckedUpdateManyWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    pagamentoId?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoEstoqueUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoEstoqueUncheckedUpdateWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoEstoqueUncheckedUpdateManyWithoutLojaInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemOrcamentoCreateManyProdutoInput = {
    id?: string
    orcamentoId: string
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
  }

  export type MovimentacaoEstoqueCreateManyProdutoInput = {
    id?: string
    tipo: string
    quantidade: number
    precoUnitario?: number | null
    motivo?: string | null
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ItemOrcamentoUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    orcamento?: OrcamentoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemOrcamentoUncheckedUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemOrcamentoUncheckedUpdateManyWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    orcamentoId?: StringFieldUpdateOperationsInput | string
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type MovimentacaoEstoqueUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutMovimentacoesEstoqueNestedInput
  }

  export type MovimentacaoEstoqueUncheckedUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoEstoqueUncheckedUpdateManyWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoCreateManyClienteInput = {
    id?: string
    codigo: string
    desconto?: number
    valorTotal: number
    observacoes?: string | null
    status?: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type OrcamentoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemOrcamentoUpdateManyWithoutOrcamentoNestedInput
    loja?: LojaUpdateOneRequiredWithoutOrcamentosNestedInput
    pagamento?: PagamentoUpdateOneWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemOrcamentoUncheckedUpdateManyWithoutOrcamentoNestedInput
    pagamento?: PagamentoUncheckedUpdateOneWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    desconto?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemOrcamentoCreateManyOrcamentoInput = {
    id?: string
    produtoId?: string | null
    servico?: string | null
    quantidade?: number
    precoUnitario: number
    desconto?: number
    total: number
  }

  export type ItemOrcamentoUpdateWithoutOrcamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneWithoutItensOrcamentoNestedInput
  }

  export type ItemOrcamentoUncheckedUpdateWithoutOrcamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemOrcamentoUncheckedUpdateManyWithoutOrcamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    produtoId?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    desconto?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type FluxoCaixaCreateManyPagamentoInput = {
    id?: string
    tipo: string
    valor: number
    metodo: $Enums.MetodoPagamento
    categoria?: string | null
    descricao: string
    lojaId: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type FluxoCaixaUpdateWithoutPagamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    loja?: LojaUpdateOneRequiredWithoutMovimentacoesFinanceirasNestedInput
  }

  export type FluxoCaixaUncheckedUpdateWithoutPagamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaUncheckedUpdateManyWithoutPagamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: StringFieldUpdateOperationsInput | string
    lojaId?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
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