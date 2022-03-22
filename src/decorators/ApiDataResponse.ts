import { applyDecorators, Type } from "@nestjs/common";
import { ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import { ResultVO } from "../VO/ResultVO";

export const ApiDataResponse = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResultVO) },
          {
            properties: {
              data: {
                type: "object",
                $ref: getSchemaPath(model)
              }
            }
          }
        ]
      }
    })
  );
};
