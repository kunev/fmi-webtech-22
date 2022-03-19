function semaphore(maxResourceAvailability) {
  let currentlyAvailable = maxResourceAvailability;

  function claim(){
    if (currentlyAvailable > 0 ) {
      currentlyAvailable--;
      return true;
    } else {
      return false;
    }
  }

  function free(){
    if (currentlyAvailable < maxResourceAvailability) {
      currentlyAvailable++;
      return true;
    } else {
      return false;
    }
  }

  function isAvailable(){
    return currentlyAvailable > 0;
  }

  return [claim, free, isAvailable];
}

let [claim, free, isAvailable] = semaphore(5);
