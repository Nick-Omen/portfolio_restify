define({ "api": [
  {
    "type": "POST",
    "url": "/auth/login/",
    "title": "",
    "name": "Sign_In",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "errorData",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./auth/controllers.js",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/signup/",
    "title": "Signup user",
    "name": "Sign_Up",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userData",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "errorObject",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./auth/controllers.js",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/languages/",
    "title": "Add language",
    "name": "Add_Language",
    "group": "Language",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Language",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./languages/controllers.js",
    "groupTitle": "Language"
  },
  {
    "type": "DELETE",
    "url": "/languages/:id",
    "title": "Delete language",
    "name": "Delete_Language",
    "group": "Language",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Language ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ID",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./languages/controllers.js",
    "groupTitle": "Language"
  },
  {
    "type": "GET",
    "url": "/languages/",
    "title": "Get languages",
    "name": "Get_Languages",
    "group": "Language",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Language[]",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./languages/controllers.js",
    "groupTitle": "Language"
  },
  {
    "type": "PUT",
    "url": "/languages/:id",
    "title": "Update language",
    "name": "Update_Language",
    "group": "Language",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Language ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Language",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./languages/controllers.js",
    "groupTitle": "Language"
  },
  {
    "type": "POST",
    "url": "/technologies/",
    "title": "Add technology",
    "name": "Add_Technology",
    "group": "Technology",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Technology",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./technologies/controllers.js",
    "groupTitle": "Technology"
  },
  {
    "type": "DELETE",
    "url": "/technologies/:id",
    "title": "Delete technology",
    "name": "Delete_Technology",
    "group": "Technology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Technology ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ID",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./technologies/controllers.js",
    "groupTitle": "Technology"
  },
  {
    "type": "GET",
    "url": "/technologies/",
    "title": "Get technologies",
    "name": "Get_Technologies",
    "group": "Technology",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Technology[]",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./technologies/controllers.js",
    "groupTitle": "Technology"
  },
  {
    "type": "PUT",
    "url": "/technologies/:id",
    "title": "Update technology",
    "name": "Update_Technology",
    "group": "Technology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Language ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Technology",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./technologies/controllers.js",
    "groupTitle": "Technology"
  },
  {
    "type": "POST",
    "url": "/works/",
    "title": "Add work",
    "name": "Add_Work",
    "group": "Work",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Work",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./works/controllers.js",
    "groupTitle": "Work"
  },
  {
    "type": "GET",
    "url": "/works/:identifier",
    "title": "Get work details",
    "name": "Get_Work",
    "group": "Work",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "work",
            "description": "<p>Work</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./works/controllers.js",
    "groupTitle": "Work"
  },
  {
    "type": "GET",
    "url": "/works/",
    "title": "Get works",
    "name": "Get_Works",
    "group": "Work",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Work[]",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./works/controllers.js",
    "groupTitle": "Work"
  },
  {
    "type": "PUT",
    "url": "/works/:identifier",
    "title": "Modify work",
    "name": "Update_Work",
    "group": "Work",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "identifier",
            "description": "<p>Work ID or slug</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Work",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./works/controllers.js",
    "groupTitle": "Work"
  },
  {
    "type": "DELETE",
    "url": "/works/:identifier",
    "title": "Delete work",
    "name": "Update_Work",
    "group": "Work",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "identifier",
            "description": "<p>Work ID or slug</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Work",
            "description": "<p>ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./works/controllers.js",
    "groupTitle": "Work"
  },
  {
    "type": "GET",
    "url": "/work-types/",
    "title": "Get work type",
    "name": "Get_Work_Types",
    "group": "Work_Type",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "WorkType[]",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "./work-type/controllers.js",
    "groupTitle": "Work_Type"
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
  }
] });
