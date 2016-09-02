class Comment < ActiveRecord::Base
  belongs_to :ticket

  def as_json(options = {})
    super(options.merge(include: :user))
  end
end
