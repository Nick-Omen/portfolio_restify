define({ "api": [
  {
    "type": "get",
    "url": "/technologies/",
    "title": "Get all technologies",
    "name": "Get_Technologies",
    "group": "Technology",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "List",
            "description": "<p>of technologies</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error",
            "description": "<p>message</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./technologies/controllers.js",
    "groupTitle": "Technology"
  },
  {
    "type": "get",
    "url": "/works/:identifier",
    "title": "Request work by id or slug.",
    "name": "Get_Works",
    "group": "Work",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "all",
            "description": "<p>works objects.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Unknown",
            "description": "<p>error</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./works/controllers.js",
    "groupTitle": "Work"
  },
  {
    "type": "get",
    "url": "/works/",
    "title": "Request works list.",
    "name": "Get_Works",
    "group": "Work",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "all",
            "description": "<p>works objects.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Unknown",
            "description": "<p>error</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./works/controllers.js",
    "groupTitle": "Work"
  },
  {
    "type": "get",
    "url": "/work-types/",
    "title": "Get all work types",
    "name": "Get_Work_Types",
    "group": "WorkType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "List",
            "description": "<p>of work types</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error",
            "description": "<p>message</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./technologies/controllers.js",
    "groupTitle": "WorkType"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_docs_main_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_docs_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/alternate_parsers/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_alternate_parsers_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/errors/authenticationerror.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_errors_authenticationerror_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_errors_authenticationerror_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/framework/connect.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_framework_connect_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_framework_connect_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/index.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_index_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/initialize.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_initialize_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_middleware_initialize_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/strategies/session.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_strategies_session_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_strategies_session_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/strategies/session.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_strategies_session_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_lib_strategies_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport-strategy/lib/strategy.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_strategy_lib_strategy_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_passport_strategy_lib_strategy_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/bunyan/lib/bunyan.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_bunyan_lib_bunyan_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_bunyan_lib_bunyan_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/escape-regexp-component/index.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_escape_regexp_component_index_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_escape_regexp_component_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/debug.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/debug.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/debug.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/debug.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/debug.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/debug.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/node.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/node.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/node.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/spdy-transport/node_modules/readable-stream/node_modules/util-deprecate/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_spdy_transport_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_spdy_transport_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/restify/node_modules/spdy/node_modules/spdy-transport/node_modules/readable-stream/node_modules/util-deprecate/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_spdy_transport_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_restify_node_modules_spdy_node_modules_spdy_transport_node_modules_readable_stream_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_nick_Documents_projects_portfolio_angular_api_node_modules_util_deprecate_browser_js",
    "name": "Public"
  }
] });
