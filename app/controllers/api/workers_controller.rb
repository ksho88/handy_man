class Api::WorkersController < ApplicationController
  
  
  def index 
    render json: Worker.all
  end
  
  def show
    @worker = Worker.find(params[:id])
    render json: @worker
  end
  
  def create 
    @worker = Woker.new(woker_params)
  if @worker.save
      render json: @worker
  else
    render json: { erros: worker.errors }, 
    status: :unprcessable_entity
    end 
  end
  
  def update
    @woker = Worker.find(params[:id])
    if @worker.update(worker_params)
    else
      render json: { errors: @worker.errors },
      status: :unprcessable_entity
    end
  end
  
  def destroy
  Worker.find(params{:id]).destroy
  @worker.destroy
  render json: { errors: 'worker deleted'}
  or 
  Worker.find(params[:id]).destroy
  render json: { message: 'worker deleted' }
  end
  
  private 
  def worker params
    prams.require(:worker).permit(:email )
