class TicketsController < ApplicationController
  def index
    respond_with Ticket.all 
  end

  def create
    respond_with Ticket.create(ticket_params)
  end

  def show
    respond_with Ticket.find(params[:id])
  end

  private
  def ticket_params
    params.require(:ticket).permit(:title, :description, :status, :category)
  end
end

