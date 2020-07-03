inputs = [4, 7, 2, 5, 2, 0];

def insert_sort(inputs):
    size = len(inputs)
    for indice in range(1, size):
        valueCurrent = inputs[indice];
        positionPrevious = indice - 1;
        while positionPrevious >= 0 and inputs[positionPrevious] > valueCurrent:
           inputs[positionPrevious + 1] = inputs[positionPrevious]; 
           positionPrevious -= 1
           
        inputs[positionPrevious + 1] = valueCurrent

    print(inputs)
   
insert_sort(inputs)