//Max Communication to Arduino Solenoid 

#define Pin1 9
#define Pin2 10
#define Pin 9
int inByte = 0;
char buffer[40];
int index = 0;
int value = 0;

void setup()
{
  Serial.begin(9600);
  pinMode(Pin1, OUTPUT); 
  pinMode(Pin2, OUTPUT); 
}

void loop()
{
  
  index = 0;
  do
  {
    buffer[index] = Serial.read();
    if(buffer[index]!=-1) index = index+1;
  }while(buffer[index-1]!=32);
  
  value = atoi(buffer);  //Value sent from Max  
  delay(10);
  
  if (value == 768+4){
    digitalWrite(Pin1, LOW);
  }
  
  if (value == 769+4){
    digitalWrite(Pin1, HIGH);
  }

  if (value == 770+4){
    digitalWrite(Pin2, LOW);
  }
  
  if (value == 771+4){
    digitalWrite(Pin2, HIGH);
  }
  
//  delay(500);
//  digitalWrite(Pin2, HIGH);
//  delay(500);
//  digitalWrite(Pin2, LOW);  
}








