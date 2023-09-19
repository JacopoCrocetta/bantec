import { RepositoryCommons } from "./common/repository.commons";

export default interface IBantecRepository {
  allTransaction(): Promise<RepositoryCommons.DataWithTotalItems<Int8Array>>;
}
