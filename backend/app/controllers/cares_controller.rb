class CaresController < ApplicationController

    def index
        all_care = Care.all
        render json: all_care
    end

    def show
        care = Care.find(params[:id])
        render json: care
    end
    
end
