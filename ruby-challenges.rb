# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# define function extract with 2 params as array and str
# declare a result array as []
# loop over array with each
  # if letter is included in array's value
    # shovel array's value in to result array
# return result array

def extract arr, str
  result = []
  arr.each do |value|
    if value.include?(str)
      result << value
    end
  end
  result
end

p extract(beverages_array, filter_letter_o)
p extract(beverages_array, filter_letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# define function alphabetize that takes in 1 param as hash
# create empty result array
# access hash values and shovel all values into result
# return flatten result array and sorted

def alphabetize hash
  result = []
  array_of_values = hash.values
  result << array_of_values
  result.flatten.sort
end

p alphabetize(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# create a Bike class
  # initialize with model, wheels, current_speed
  # default wheels to 2
  # current_speed = 0

# define a bike_info method
  # returns sentence with data

# class Bike
#   def initialize(model, speed, wheels = 2)
#     @model = model
#     @wheels = wheels
#     @current_speed = speed
#   end

#   def bike_info
#     p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
#   end
# end

# my_bike = Bike.new("Hurley", 13)
# my_bike.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
# define pedal_faster method with 1 param
  # increment speed based on param

# define a brake method with 1 param
  # current speed = current_speed - param
  # if current_speed < 0
    # return 0
  # else 
    # return current_speed

class Bike
  def initialize(model, speed, wheels = 2)
    @model = model
    @wheels = wheels
    @current_speed = speed
  end

  def bike_info
    p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
  end

  def pedal_faster num
    p @current_speed += num
  end

  def brake num
    @current_speed -= num
    if @current_speed < 0
      p 0
    else
      p @current_speed
    end
  end
end

my_bike = Bike.new("Hurley", 0)
my_bike.bike_info

my_bike.pedal_faster(10)
my_bike.pedal_faster(18)
my_bike.brake(5)
my_bike.brake(25)