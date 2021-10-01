class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments
  validates :job_title :text, :category, presence: :true
  end

