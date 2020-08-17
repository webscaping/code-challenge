class Api::V1::DepartmentsController < ApplicationController
    before_action :set_department, only: [:show, :update, :destroy]

    # GET /departments
    # Returns all departments
    def index
        @departments = Department.all
        render json: DepartmentSerializer.new(@departments).serializable_hash.to_json
    end

    # GET /departments/{id}
    # Returns department based on id param
    def show
        render json: @department
    end

    # POST /departments
    # Creates a new department record to db

    def create
        @department = Department.new(department_params)

        if @department.save
            render json: @department, status: :created, location: api_v1_department_url(@department)
        else
            render json: @department.errors, status: :unprocessable_entity
        end
    end

    # PATCH / PUT /departments/{id}
    # updates the department record specified in id param
    def update
        if @department.update(department_params)
            render json: @department
        else
            render json: @department.errors, status: :unprocessable_entity
        end
    end

    # DELETE /departments/{id}
    # deletes the department record from db
    def destroy
        @department.destroy
    end

    private

        # gets the db record based on url id param
        def set_department
            @department = Department.find(params[:id])
        end

        # white list params
        def department_params
            params.require(:department).permit(:name)
        end
    
end
