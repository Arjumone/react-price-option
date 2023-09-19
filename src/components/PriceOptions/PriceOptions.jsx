import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30,
          "features": [
            "Access to cardio equipment",
            "Strength training area",
            "Locker room access",
            "Free weights",
            "Fitness assessment"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 50,
          "features": [
            "Full gym access",
            "Group fitness classes",
            "Personal training sessions",
            "Sauna and steam room",
            "Towel service",
            "Nutritional counseling"
          ]
        },
        {
          "id": 3,
          "name": "Student Membership",
          "price": 25,
          "features": [
            "Access to cardio equipment",
            "Strength training area",
            "Locker room access",
            "Valid student ID required",
            "Discounted group classes"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 80,
          "features": [
            "Full gym access for 2 adults and 2 children",
            "Group fitness classes",
            "Family locker room",
            "Childcare services available",
            "Family fitness programs"
          ]
        }
      ]
      
    return (
        <div className=" m-12">
            <h2 className="mb-6 bg-purple-300">Best Prices in the town:{priceOptions.length}</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;