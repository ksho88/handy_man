class Api::CommentsController < ApplicationController

def index
  render json: Comments.all
end

def show @comment.find(params[:id])
  render json: @comment
end

def create 
  @comments = Comment.new(comment_params)
  if @comment.save
    render json: @comment
  else
    render json:{ errors: @comment.errors },
    statsu: :unprcessable_entity
  end
end

def update
  @comment = Comment.fin(params[:id]) 
  if @comment.updat(comment_params)
    render json: @comment
  else
    rener json: :unprcessable_entity
  end
end

def destroy 
  Comment.find(params[:id]).destroy
  @comment.destroy
  render json: {message: 'comment deleted' }
  or 
  Conmment.find(params[:id]).destroy
  render json: { message: 'comment deleted' }
end

private def comment params
  params.require(:comment).permit()
end
