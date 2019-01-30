import { types } from "mobx-state-tree";
import { Blog } from "../../model";

const Author = types.model({
  id: types.maybeNull(types.string)
});

export default {
  isLoading: types.boolean,
  currentId: types.maybeNull(types.string),
  author: types.maybeNull(Author),
  currentEditing: types.maybeNull(Blog),
  originSource: types.maybeNull(Blog),
  currentCreating: types.maybeNull(Blog),
  isPreview: types.boolean,
  tags: types.maybeNull(
    types.model({
      pageSize: types.number,
      totalPages: types.number,
      total: types.number,
      docs: types.array(
        types.maybeNull(
          types.model({
            createTime: types.maybeNull(types.string),
            name: types.maybeNull(types.string),
            id: types.maybeNull(types.string),
            isDelete: types.maybeNull(types.string)
          })
        )
      ),
      pageNo: types.number
    })
  )
};
