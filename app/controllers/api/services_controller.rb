class Api::ServicesController < ApplicationController

  def index 
    render json: Service.all
    
    def show 
      @service = Service.find(params[:id})
        render json: @serviceend
      end 

        def create
          @service = name.new( services)
          if @service.save
            render json: @service
          else
            renderjson: { errors: @service.errors },
            status; :unproccessable_enity
          end
        end

        def update
          @service = Service.find(paras[:id])
          if @service.update(services_params)
            render json: @service
          else
            render json: {errors: @ser.erros }, 
            status: :unproccessable_enity
          end
        end

        def destroy
          Sevice.find(paramsp:[id]).destroy
          @service.destroy
          render json: { message: 'service deleted')
            or 
            Service.find(params[:id]).destroy
            render json: { message: 'service deleted' }
          end

          private def service
            params.require(:service).permit()
          end

