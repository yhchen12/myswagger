/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Category } from './Category';
import { Tag } from './Tag';
import { HttpFile } from '../http/http';

export class Pet {
    'id'?: number;
    'category'?: Category;
    'name': string;
    'photoUrls': Array<string>;
    'tags'?: Array<Tag>;
    /**
    * pet status in the store
    */
    'status'?: PetStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Category",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "photoUrls",
            "baseName": "photoUrls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PetStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Pet.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type PetStatusEnum = "available" | "pending" | "sold" ;

