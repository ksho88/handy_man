class Api::CommentsController < ApplicationController

def index
  render json: services.comments
end

def show @comment.find(params[:id])
  render json: @comment
end

def create 
  @comments = service.comments(comment_params)
  if @comment.save
    render json: @comment
  else
    render json:{ errors: @comment.errors },
    statsu: :unprcessable_entity
  end
end

def update
  @comment = service.comments(params[:id]) 
  if @comment.updat(comment_params)
    render json: @comment
  else
    rener json: :unprcessable_entity
  end
end

def destroy 
  service.comments(params[:id]).destroy
  @comment.destroy
  render json: {message: 'comment deleted' }
  or 
  service.comments(params[:id]).destroy
  render json: { message: 'comment deleted' }
end

private def comment params
  before _action :set_service
  params.require(:comment).permit()
end
