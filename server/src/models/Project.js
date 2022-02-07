const Model = require("./Model.js")

class Project extends Model {
  static get tableName() {
    return "projects"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        language: { type: "string" }
      }
    }
  }
  
}

module.exports = Project