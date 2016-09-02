class TicketsController < ApplicationController
  before_filter :authenticate_user!
  def index
    respond_with Ticket.all 
  end

  def create
    respond_with Ticket.create(ticket_params.merge(user_id: current_user.id))
  end

  def show
    respond_with Ticket.find(params[:id])
  end

  private
  def ticket_params
    params.require(:ticket).permit(:title, :description, :status, :category)
  end
end

