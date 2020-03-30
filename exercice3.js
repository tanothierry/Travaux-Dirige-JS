for (counter = 0; counter <= 100; counter = counter + 1)  
{
    testPrime = 0;
    for (testNum = 1; testNum <=100; testNum = testNum + 1)
    {
        var testRes = counter % testNum;
        if (testRes === 0)
        {
        testPrime = testPrime + 1;
        }
    }
    if (testPrime === 2)
    {
        console.log(counter);
    }
   
}
