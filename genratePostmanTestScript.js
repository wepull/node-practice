const fs = require("fs");

const collectionObject = {
  item: [
    {
      id: "742c0154-591a-48e8-b810-8b5ccbf6046b",
      name: "products",
      item: [
        {
          id: "00d08f98-aaf7-4c4e-a657-187b1284f81d",
          name: "Get All Products",
          request: {
            name: "Get All Products",
            description: {
              content: "It gives you all products",
              type: "text/plain",
            },
            url: {
              path: ["products"],
              host: ["{{baseUrl}}"],
              query: [],
              variable: [],
            },
            header: [
              {
                key: "Accept",
                value: "application/json",
              },
            ],
            method: "GET",
            auth: null,
          },
          response: [
            {
              id: "44a3d739-b885-4f79-af9e-4c9a83b42749",
              name: "Successful operation",
              originalRequest: {
                url: {
                  path: ["products"],
                  host: ["{{baseUrl}}"],
                  query: [],
                  variable: [],
                },
                header: [
                  {
                    key: "Accept",
                    value: "application/json",
                  },
                ],
                method: "GET",
                body: {},
              },
              status: "OK",
              code: 200,
              header: [
                {
                  key: "Content-Type",
                  value: "application/json",
                },
              ],
              body: '[\n  {\n    "id": 1,\n    "name": "apple",\n    "description": "apple",\n    "price": 50\n  },\n  {\n    "id": 2,\n    "name": "1",\n    "description": "apple",\n    "price": 50\n  }\n]',
              cookie: [],
              _postman_previewlanguage: "json",
            },
          ],
          event: [
            {
              listen: "test",
              script: {
                exec: [
                  'pm.test("Check response object", function () {\n    var jsonData = pm.response.json();\n\n    pm.expect(pm.response).to.have.property(\'name\', \'Successful operation\');\n    pm.expect(pm.response).to.have.property(\'status\', \'OK\');\n    pm.expect(pm.response).to.have.property(\'code\', undefined);\n    pm.expect(pm.response).to.have.property(\'header\').to.be.an(\'object\');\n    pm.expect(jsonData.body).to.be.an(\'array\').that.includes.deep.members([\n        {\n            "id": 1,\n            "name": "apple",\n            "description": "apple",\n            "price": 50\n        },\n        {\n            "id": 2,\n            "name": "1",\n            "description": "apple",\n            "price": 50\n        }\n    ]);\n});\n',
                ],
                type: "text/javascript",
              },
            },
          ],
          protocolProfileBehavior: {
            disableBodyPruning: true,
          },
        },
        {
          id: "124bc997-cb62-4573-88be-35169fac5469",
          name: "Add a new product to the store",
          request: {
            name: "Add a new product to the store",
            description: {
              content: "Add a new product to the store",
              type: "text/plain",
            },
            url: {
              path: ["products"],
              host: ["{{baseUrl}}"],
              query: [],
              variable: [],
            },
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Accept",
                value: "application/json",
              },
            ],
            method: "POST",
            auth: null,
            body: {
              mode: "raw",
              raw: '{\n    "name": "{{name}}",\n    "id": "{{id}}",\n    "description": "{{description}}",\n    "price": "{{price}}"\n}',
              options: {
                raw: {
                  language: "json",
                },
              },
            },
          },
          response: [
            {
              id: "fde4a298-aef2-4cf3-8029-30d7448d990b",
              name: "Successful operation",
              originalRequest: {
                url: {
                  path: ["products"],
                  host: ["{{baseUrl}}"],
                  query: [],
                  variable: [],
                },
                header: [
                  {
                    key: "Accept",
                    value: "application/json",
                  },
                ],
                method: "POST",
                body: {
                  mode: "raw",
                  raw: '{\n    "name": "{{name}}",\n    "description": "{{description}}",\n    "price": 50\n}',
                  options: {
                    raw: {
                      language: "json",
                    },
                  },
                },
              },
              status: "OK",
              code: 200,
              header: [
                {
                  key: "Content-Type",
                  value: "application/json",
                },
              ],
              body: '{\n  "id": 4,\n  "name": "apple",\n  "description": "apple",\n  "price": 50\n}',
              cookie: [],
              _postman_previewlanguage: "json",
            },
            {
              id: "7a1a15c0-ada6-4ce5-9607-e258ca7327e6",
              name: "Invalid input",
              originalRequest: {
                url: {
                  path: ["products"],
                  host: ["{{baseUrl}}"],
                  query: [],
                  variable: [],
                },
                method: "POST",
                body: {
                  mode: "raw",
                  raw: '{\n    "name": "{{name}}",\n    "description": "{{description}}",\n    "price": 50\n}',
                  options: {
                    raw: {
                      language: "json",
                    },
                  },
                },
              },
              status: "Method Not Allowed",
              code: 405,
              header: [
                {
                  key: "Content-Type",
                  value: "text/plain",
                },
              ],
              body: "",
              cookie: [],
              _postman_previewlanguage: "text",
            },
          ],
          event: [
            {
              listen: "test",
              script: {
                exec: [
                  "pm.test(\"Check response object attributes and values\", function () {\n    var jsonData = pm.response.json();\n    \n    if(pm.response.code === 200) {\n        pm.expect(pm.response.request.name).to.eql('Successful operation');\n        pm.expect(pm.response.status).to.eql('OK');\n        pm.expect(pm.response.code).to.eql(undefined);\n        pm.expect(typeof pm.response.headers).to.eql('object');\n        \n        pm.expect(jsonData).to.have.property('id');\n        pm.expect(jsonData.id).to.eql(4);\n        \n        pm.expect(jsonData).to.have.property('name');\n        pm.expect(jsonData.name).to.eql('apple');\n        \n        pm.expect(jsonData).to.have.property('description');\n        pm.expect(jsonData.description).to.eql('apple');\n        \n        pm.expect(jsonData).to.have.property('price');\n        pm.expect(jsonData.price).to.eql(50);\n    } else if (pm.response.code === 405) {\n        pm.expect(pm.response.request.name).to.eql(undefined);\n        pm.expect(pm.response.status).to.eql('Method Not Allowed');\n        pm.expect(pm.response.code).to.eql(405);\n        pm.expect(typeof pm.response.headers).to.eql('object');\n        \n        pm.expect(jsonData).to.have.property('message');\n        pm.expect(jsonData.message).to.eql('Method not allowed');\n    }\n});\n",
                ],
                type: "text/javascript",
              },
            },
          ],
          protocolProfileBehavior: {
            disableBodyPruning: true,
          },
        },
        {
          id: "27d6915f-44d1-4906-8c60-c1a7540cce5a",
          name: "{{productId}}",
          item: [
            {
              id: "c810b532-d3f7-4b44-ab22-be58919aa349",
              name: "Find product by ID",
              request: {
                name: "Find product by ID",
                description: {
                  content: "Returns a single product",
                  type: "text/plain",
                },
                url: {
                  path: ["products", ":productId"],
                  host: ["{{baseUrl}}"],
                  query: [],
                  variable: [
                    {
                      disabled: false,
                      type: "any",
                      value: "{{productId}}",
                      key: "productId",
                      description: "(Required) ID of product to return",
                    },
                  ],
                },
                header: [
                  {
                    key: "Accept",
                    value: "application/json",
                  },
                ],
                method: "GET",
                auth: null,
              },
              response: [
                {
                  id: "577efbba-5700-427c-87ee-cea9f4d6690c",
                  name: "successful operation",
                  originalRequest: {
                    url: {
                      path: ["products", ":productId"],
                      host: ["{{baseUrl}}"],
                      query: [],
                      variable: [
                        {
                          disabled: false,
                          type: "any",
                          value: "{{productId}}",
                          key: "productId",
                          description: "(Required) ID of product to return",
                        },
                      ],
                    },
                    header: [
                      {
                        key: "Accept",
                        value: "application/json",
                      },
                    ],
                    method: "GET",
                    body: {},
                  },
                  status: "OK",
                  code: 200,
                  header: [
                    {
                      key: "Content-Type",
                      value: "application/json",
                    },
                  ],
                  body: '{\n  "id": 4,\n  "name": "1",\n  "description": "banana",\n  "price": 50\n}',
                  cookie: [],
                  _postman_previewlanguage: "json",
                },
                {
                  id: "3e87a7e4-c8f3-4fc5-9273-abf83471076b",
                  name: "Product not found",
                  originalRequest: {
                    url: {
                      path: ["products", ":productId"],
                      host: ["{{baseUrl}}"],
                      query: [],
                      variable: [
                        {
                          disabled: false,
                          type: "any",
                          value: "{{productId}}",
                          key: "productId",
                          description: "(Required) ID of product to return",
                        },
                      ],
                    },
                    method: "GET",
                    body: {},
                  },
                  status: "Not Found",
                  code: 404,
                  header: [
                    {
                      key: "Content-Type",
                      value: "text/plain",
                    },
                  ],
                  body: "",
                  cookie: [],
                  _postman_previewlanguage: "text",
                },
              ],
              event: [
                {
                  listen: "test",
                  script: {
                    exec: [
                      'pm.test("Check response details", function () {\n    var jsonData = pm.response.json();\n\n    if(pm.response.code === 200){\n        pm.expect(pm.response.status).to.eql("OK");\n        pm.expect(jsonData.name).to.eql("successful operation");\n        pm.expect(pm.response.headers).to.be.an("object");\n        pm.expect(jsonData.body).to.be.an("object");\n        pm.expect(jsonData.body.id).to.eql(4);\n        pm.expect(jsonData.body.name).to.eql("1");\n        pm.expect(jsonData.body.description).to.eql("banana");\n        pm.expect(jsonData.body.price).to.eql(50);\n    } else if(pm.response.code === 404){\n        pm.expect(pm.response.status).to.eql("Not Found");\n        pm.expect(jsonData.name).to.eql(undefined);\n        pm.expect(pm.response.headers).to.be.an("object");\n        pm.expect(jsonData.body).to.be.an("object");\n        pm.expect(jsonData.body.id).to.eql(undefined);\n        pm.expect(jsonData.body.name).to.eql(undefined);\n        pm.expect(jsonData.body.description).to.eql(undefined);\n        pm.expect(jsonData.body.price).to.eql(undefined);\n    }\n});\n',
                    ],
                    type: "text/javascript",
                  },
                },
              ],
              protocolProfileBehavior: {
                disableBodyPruning: true,
              },
            },
            {
              id: "5d8c904d-478c-49ae-8dc8-f890edf1bd4f",
              name: "Updates a product in the store with form data",
              request: {
                name: "Updates a product in the store with form data",
                description: {
                  content: "",
                  type: "text/plain",
                },
                url: {
                  path: ["products", ":productId"],
                  host: ["{{baseUrl}}"],
                  query: [],
                  variable: [
                    {
                      disabled: false,
                      type: "any",
                      value: "{{productId}}",
                      key: "productId",
                      description:
                        "(Required) ID of product that needs to be updated",
                    },
                  ],
                },
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                  {
                    key: "Accept",
                    value: "application/json",
                  },
                ],
                method: "PUT",
                auth: null,
                body: {
                  mode: "raw",
                  raw: '{\n    "name": "{{name}}",\n    "id": "{{id}}",\n    "description": "{{description}}",\n    "price": "{{price}}"\n}',
                  options: {
                    raw: {
                      language: "json",
                    },
                  },
                },
              },
              response: [
                {
                  id: "ca771201-050d-4b9e-9da9-2eb277d37398",
                  name: "Updated Product",
                  originalRequest: {
                    url: {
                      path: ["products", ":productId"],
                      host: ["{{baseUrl}}"],
                      query: [],
                      variable: [
                        {
                          disabled: false,
                          type: "any",
                          value: "{{productId}}",
                          key: "productId",
                          description:
                            "(Required) ID of product that needs to be updated",
                        },
                      ],
                    },
                    header: [
                      {
                        key: "Accept",
                        value: "application/json",
                      },
                    ],
                    method: "PUT",
                    body: {
                      mode: "raw",
                      raw: '{\n    "name": 1,\n    "description": "{{description}}",\n    "price": 50\n}',
                      options: {
                        raw: {
                          language: "json",
                        },
                      },
                    },
                  },
                  status: "OK",
                  code: 200,
                  header: [
                    {
                      key: "Content-Type",
                      value: "application/json",
                    },
                  ],
                  body: '{\n  "id": 4,\n  "name": "1",\n  "description": "mango",\n  "price": 50\n}',
                  cookie: [],
                  _postman_previewlanguage: "json",
                },
                {
                  id: "dc793686-4201-4008-bd14-9c540b1861ab",
                  name: "Not Found",
                  originalRequest: {
                    url: {
                      path: ["products", ":productId"],
                      host: ["{{baseUrl}}"],
                      query: [],
                      variable: [
                        {
                          disabled: false,
                          type: "any",
                          value: "{{productId}}",
                          key: "productId",
                          description:
                            "(Required) ID of product that needs to be updated",
                        },
                      ],
                    },
                    method: "PUT",
                    body: {
                      mode: "raw",
                      raw: '{\n    "name": 1,\n    "description": "{{description}}",\n    "price": 50\n}',
                      options: {
                        raw: {
                          language: "json",
                        },
                      },
                    },
                  },
                  status: "Not Found",
                  code: 404,
                  header: [
                    {
                      key: "Content-Type",
                      value: "text/plain",
                    },
                  ],
                  body: "",
                  cookie: [],
                  _postman_previewlanguage: "text",
                },
              ],
              event: [
                {
                  listen: "test",
                  script: {
                    exec: [
                      "pm.test(\"Validate response attributes\", function () {\n    var jsonData = pm.response.json();\n\n    if (pm.response.code === 200) {\n        pm.expect(pm.response).to.have.property('name', 'Updated Product');\n        pm.expect(pm.response).to.have.property('status', 'OK');\n        pm.expect(pm.response).to.have.property('code', undefined);\n        pm.expect(pm.response).to.have.property('header').to.be.an('object');\n        \n        pm.expect(jsonData).to.be.an('object');\n        pm.expect(jsonData).to.have.property('id', 4);\n        pm.expect(jsonData).to.have.property('name', '1');\n        pm.expect(jsonData).to.have.property('description', 'mango');\n        pm.expect(jsonData).to.have.property('price', 50);\n    } else if (pm.response.code === 404) {\n        pm.expect(pm.response).to.have.property('name', undefined);\n        pm.expect(pm.response).to.have.property('status', 'Not Found');\n        pm.expect(pm.response).to.have.property('code', 404);\n        pm.expect(pm.response).to.have.property('header').to.be.an('object');\n    } else {\n        pm.expect(pm.response).to.have.property('status', 'error');\n    }\n});\n",
                    ],
                    type: "text/javascript",
                  },
                },
              ],
              protocolProfileBehavior: {
                disableBodyPruning: true,
              },
            },
            {
              id: "6f54b518-9a49-44a2-b5e6-0dea52ede048",
              name: "Deletes a product",
              request: {
                name: "Deletes a product",
                description: {
                  content: "delete a product",
                  type: "text/plain",
                },
                url: {
                  path: ["products", ":productId"],
                  host: ["{{baseUrl}}"],
                  query: [],
                  variable: [
                    {
                      disabled: false,
                      type: "any",
                      value: "{{productId}}",
                      key: "productId",
                      description: "(Required) Product id to delete",
                    },
                  ],
                },
                method: "DELETE",
                auth: null,
              },
              response: [
                {
                  id: "c39770fe-2a3d-4727-964f-7ba2b7e7a0b0",
                  name: "Product deleted",
                  originalRequest: {
                    url: {
                      path: ["products", ":productId"],
                      host: ["{{baseUrl}}"],
                      query: [],
                      variable: [
                        {
                          disabled: false,
                          type: "any",
                          value: "{{productId}}",
                          key: "productId",
                          description: "(Required) Product id to delete",
                        },
                      ],
                    },
                    method: "DELETE",
                    body: {},
                  },
                  status: "OK",
                  code: 200,
                  header: [
                    {
                      key: "Content-Type",
                      value: "text/plain",
                    },
                  ],
                  body: "",
                  cookie: [],
                  _postman_previewlanguage: "text",
                },
                {
                  id: "380622a1-cc64-4d6e-8cc9-7fe3e6495674",
                  name: "Not Found",
                  originalRequest: {
                    url: {
                      path: ["products", ":productId"],
                      host: ["{{baseUrl}}"],
                      query: [],
                      variable: [
                        {
                          disabled: false,
                          type: "any",
                          value: "{{productId}}",
                          key: "productId",
                          description: "(Required) Product id to delete",
                        },
                      ],
                    },
                    method: "DELETE",
                    body: {},
                  },
                  status: "Not Found",
                  code: 404,
                  header: [
                    {
                      key: "Content-Type",
                      value: "text/plain",
                    },
                  ],
                  body: "",
                  cookie: [],
                  _postman_previewlanguage: "text",
                },
              ],
              event: [
                {
                  listen: "test",
                  script: {
                    exec: [
                      "pm.test(\"Validate response attributes\", function () {\n    var jsonData = pm.response.json();\n\n    pm.expect(jsonData).to.be.an('object');\n    pm.expect(jsonData.header).to.be.an('object');\n    pm.expect(jsonData.body).to.exist;\n\n    if(jsonData.status === 'OK'){\n        pm.expect(jsonData.name).to.eql('Product deleted');\n        pm.expect(jsonData.code).to.be.undefined;\n    } else if(jsonData.status === 'Not Found'){\n        pm.expect(jsonData.name).to.be.undefined;\n        pm.expect(jsonData.code).to.eql(404);\n    }\n});\n",
                    ],
                    type: "text/javascript",
                  },
                },
              ],
              protocolProfileBehavior: {
                disableBodyPruning: true,
              },
            },
          ],
          event: [],
        },
      ],
      event: [],
    },
  ],
  event: [],
  variable: [
    {
      type: "string",
      value: "http://34.131.81.54:8080/api",
      key: "baseUrl",
    },
    {
      type: "string",
      value: "3",
      key: "name",
    },
    {
      type: "string",
      value: "cashew",
      key: "description",
    },
    {
      type: "number",
      value: 1,
      key: "id",
    },
    {
      type: "number",
      value: 30.0,
      key: "price",
    },
    {
      type: "number",
      value: 110,
      key: "productId",
    },
  ],
  info: {
    _postman_id: "9b3e0fe2-ef8f-4f23-a0c6-88d702ce4e8c",
    name: "Swagger My-Products - OpenAPI 3.0",
    schema:
      "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    description: {
      content: "This page is for my products api spec",
      type: "text/plain",
    },
  },
};

// Function to generate Postman test script
function generatePostmanTestScript(item) {
  if (!item.response || !item.event) {
    return ""; // No response or event found, skip
  }

  const tests = item.event
    .filter((event) => event.listen === "test")
    .map((event) => event.script.exec.join("\n"));

  return tests.join("\n");
}

// Function to recursively generate Postman test scripts for items and sub-items
function generateTestScripts(item, testScripts) {
  if (item.item) {
    item.item.forEach((subItem) => {
      const script = generatePostmanTestScript(subItem);
      if (script) {
        testScripts.push(script);
      }
      generateTestScripts(subItem, testScripts);
    });
  }
}

// Generate test scripts
const testScripts = [];
generateTestScripts(collectionObject, testScripts);

// Write the generated test scripts to a file
const outputFilePath = "postman-test-scripts.js";

fs.writeFileSync(outputFilePath, testScripts.join("\n\n"));
console.log(`Postman test scripts generated and saved to ${outputFilePath}`);
