// Page 1: Entrance Page
// Inputs:
// User's Name (text input)
// Vehicle Registration Number (text input)
// Type of Vehicle (dropdown selection: Bike, Car, SUV)
// Functionality:
// Upon submission, allocate a parking slot from the available slots.
// Display the allocated parking slot ID to the user.

// Page 2: Exit Page
// Inputs:
// Vehicle Registration Number (text input)
// Functionality:
// Upon submission, free up the parking slot used by the vehicle.
// Calculate and display the time spent in the parking lot.
// Parking Slot Allocation
// Parking Slots:
// P1: Accommodates 2 bikes or 1 car
// P2: Accommodates 2 bikes or 1 car
// P3: Accommodates 2 bikes or 1 car
// P4: Accommodates 3 bikes or (1 car and 1 bike) or 1 SUV
// P5: Accommodates 3 bikes or (1 car and 1 bike) or 1 SUV
// Allocation Logic:
// Prioritize parking slots to maximize space usage.
// If a slot can accommodate multiple configurations, choose the most space-efficient option.
// Ensure that no more vehicles are allocated to a slot than it can handle.


const parkingSlots = [
    { id: 'P1', bikes: 2, cars: 1, suvs: 0 },
    { id: 'P2', bikes: 2, cars: 1, suvs: 0 },
    { id: 'P3', bikes: 2, cars: 1, suvs: 0 },
    { id: 'P4', bikes: 3, cars: 1, suvs: 1 },
    { id: 'P5', bikes: 3, cars: 1, suvs: 1 }
];
    
    let vehicleRegistry = {};
    
    function allocationParkingSlot(userName,regNumber,vechileType){
        for(let slot of parkingSlots){
            if(vechileType ==="Bike"&& slot.bikes>0){
                slot.bikes--;
                vehicleRegistry[regNumber]=slot.id;
                return `Allocated Slot :${slot.id}`;
            }else if(vechileType==="Car" && slot.cars>0){
                 slot.cars--;
                vehicleRegistry[regNumber]=slot.id;
                return `Allocated Slot :${slot.id}`;
            }
            else if(vechileType==="SUV"&& slot.suv>0){
                slot.suv--;
                 vehicleRegistry[regNumber]=slot.id;
                return `Allocated Slot :${slot.id}`;
                
            }
        }
        return "No Slot is Availble"
    };
    
    
    function exitParking(regNumber){
        if(vehicleRegistry[regNumber]){
            const slotId= vehicleRegistry[regNumber];
            const slot = parkingSlots.find(slot=>slot.id===slotId);
            delete vehicleRegistry[regNumber];
            slot.cars++;
            const spentTime =  'Time spent: 2 hours';

            return `${slotId} free {spentTime}`;
        }
        else{
            return "Vehicle Not Found"
        }
    }
    
    console.log(allocationParkingSlot("ravi","ABC1232","Car"));
    console.log(exitParking('ABC1232'));
    
    
    