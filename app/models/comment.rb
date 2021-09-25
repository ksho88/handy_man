class Comment < ApplicationRecord
  belongs_to :services
  validates :title, :author, dependent: :destroy
end
