import { QueryInterface, DataTypes } from 'sequelize';

export = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('<%= tableName %>', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

        <% attributes.forEach(function (attribute) { %>
            <%= attribute.fieldName %>: {
                type: DataTypes.<%= attribute.dataFunction ? `${attribute.dataFunction.toUpperCase()}(DataTypes.${attribute.dataType.toUpperCase()})` : attribute.dataType.toUpperCase() %>
            },
        <% }) %>

            <%= createdAt %>: {
                allowNull: false,
                type: DataTypes.DATE
            },

            <%= updatedAt %>: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },

    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('<%= tableName %>');
    }
};
