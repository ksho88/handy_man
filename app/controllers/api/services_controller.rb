class Api::ServicesController < ApplicationController

  def index 
    render json: Woker.services
    
    def show 
      @service = worker.find(params[:id})
        render json: @service
      end 

        def create
          @service = name.new( services )
          if @service.save
            render json: @service
          else
            renderjson: { errors: @service.errors },
            status; :unproccessable_enity
          end
        end

        def update
          @service = worker.services(paras[:id])
          if @service.update(services_params)
            render json: @service
          else
            render json: {errors: @service.errors }, 
            status: :unproccessable_enity
          end
        end

        def destroy
          worker.sevices(paramsp:[id]).destroy
          @service.destroy
          render json: { message: 'service deleted')
            or 
            worker.services(params[:id]).destroy
            render json: { message: 'service deleted' }
          end

          private def service
            before_action :set_worker
@worker.find(params[:worker_id])
            params.require(:service).permit()
            b
          end

