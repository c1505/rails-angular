class CommentsController < ApplicationController
  before_filter :authenticate_user!

  def create
    ticket = Ticket.find(params[:ticket_id])
    comment = ticket.comments.create(comment_params.merge(user_id: current_user.id))
    respond_with ticket, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end