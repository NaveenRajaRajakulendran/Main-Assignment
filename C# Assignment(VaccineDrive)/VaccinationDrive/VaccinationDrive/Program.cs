using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VaccinationDrive
{
    class Program
    {
      
        public static List<BenificiaryDetails> Benificiary = new List<BenificiaryDetails>();
        private static List<VaccineDetails> vaccine = new List<VaccineDetails>();


        static void Main(string[] args)
        {
            int registerNumber = 1002;
            DefaultValues();
            BenificiaryAndVaccination(registerNumber);
        }
        /// <summary>
        /// This Method is use to add default values..
        /// </summary>
        public static void DefaultValues()
        {
            VaccineDetails vaccinationOne = new VaccineDetails(1, "Covishield", new DateTime(2021, 10, 17), new DateTime());
            vaccine.Add(vaccinationOne);
            BenificiaryDetails benificiaryOne = new BenificiaryDetails(1001, "Naveen Raja", 9080327102, "chennai", 21, "Male", vaccine);
            benificiaryOne.VaccinedetailList = vaccine;
            Benificiary.Add(benificiaryOne);
            VaccineDetails vaccinationTwo = new VaccineDetails(2, "Covaxin", new DateTime(2021, 10, 18), new DateTime(2021, 11, 18));
            vaccine.Add(vaccinationTwo);
            BenificiaryDetails benificiaryTwo = new BenificiaryDetails(1002, "Karthick Raja", 8248893599, "chennai", 25, "Male", vaccine);
            benificiaryTwo.VaccinedetailList = vaccine;
            Benificiary.Add(benificiaryTwo);
        }
        /// <summary>
        /// This the method which contain full process
        /// </summary>
        /// <param name="registrationNumber"></param>
        public static void BenificiaryAndVaccination(int registrationNumber)
        {
        MainMenu:
        SubMenu:
            Console.WriteLine("--------------------------------------------");
            Console.WriteLine("Benificiary Registrtion->1\nVaccination->2\nExit");
            Console.WriteLine("--------------------------------------------");
            int choose;
            bool tryFlag = int.TryParse(Console.ReadLine(), out choose);
            ++registrationNumber;
            string name = "";
            int age = 0;
            long mobileNumber = 0;
            string city = "";
            string gender = "";
            if (tryFlag == true)
            {
                switch (choose)
                {
                    case 1:
                        Console.WriteLine("--------------------------------------------");
                        Console.WriteLine("REGISTRATION PAGE");
                        Console.WriteLine("--------------------------------------------");
                        Console.Write("Enter your Name :");
                        name = Console.ReadLine();
                        Console.Write("Enter your Age in Numbers :");
                        age = int.Parse(Console.ReadLine());
                        Console.Write("Enter your Mobile Number :");
                        mobileNumber = long.Parse(Console.ReadLine());
                        Console.Write("Enter your city :");
                        city = Console.ReadLine();
                        Console.WriteLine("Gender:\nmale->1\nfemale->2\ntransegender->3");
                        int choice = int.Parse(Console.ReadLine());
                        switch (choice)
                        {
                            case 1:
                                gender = Gender.Male.ToString();
                                break;

                            case 2:
                                gender = Gender.Female.ToString();
                                break;

                            case 3:
                                gender = Gender.Transgender.ToString();
                                break;

                            default:
                                Console.WriteLine("enter a valid choice!!!");
                                break;
                        }
                        VaccineDetails vaccinationN = new VaccineDetails(1, "", new DateTime(), new DateTime());
                        vaccine.Add(vaccinationN);
                        BenificiaryDetails benificiaryN = new BenificiaryDetails(registrationNumber, name, mobileNumber, city, age, gender, vaccine);
                        benificiaryN.VaccinedetailList = vaccine;
                        Benificiary.Add(benificiaryN);
                        Console.WriteLine("Your Vaccination ID is :{0}", registrationNumber);

                        goto SubMenu;
                    case 2:
                        Console.WriteLine("--------------------------------------------");
                        Console.WriteLine("VACCINATION");
                        Console.WriteLine("--------------------------------------------");
                        Console.Write("Enter your registration number :");
                        int regNumber = int.Parse(Console.ReadLine());
                        int count = 0;
                        int index = 0;
                        foreach(var values in Benificiary)
                        {
                            if (values.RegisterNumber == regNumber)
                            {
                                Console.WriteLine("--------------------------------------------");
                                Console.WriteLine("Take Vaccination->1\nVaccination History->2\nNext Due Date->3\nExit->4");
                                Console.WriteLine("--------------------------------------------");
                                int chooseNumber = int.Parse(Console.ReadLine());
                                switch (chooseNumber)
                                {
                                    case 1:
                                        Console.WriteLine("Take vaccination.....");
                                        Console.WriteLine("COVAXIN->1\nCOVISHIELD->2");
                                        string vaccinationType = "";
                                        int num = int.Parse(Console.ReadLine());
                                        switch (num)
                                        {
                                            case 1:
                                                vaccinationType = VaccineType.Covaxine.ToString();
                                                break;
                                            case 2:
                                                vaccinationType = VaccineType.Covishield.ToString();
                                                break;
                                            default:
                                                Console.WriteLine("Enter a valid vaccine!!!");
                                                break;

                                        }
                                        DateTime nextTime = new DateTime();
                                        if (values.VaccinedetailList[index].Dosage == 1)
                                        {
                                            values.VaccinedetailList[index].Dosage += 1;
                                            values.VaccinedetailList[index].Date1 = DateTime.Now;
                                            values.VaccinedetailList[index].VaccineType = vaccinationType;
                                            nextTime = values.VaccinedetailList[index].Date1.AddDays(30);
                                            values.VaccinedetailList[index].Date2 = nextTime;
                                            Console.WriteLine("Your next Vaccination is {0}", nextTime.ToUniversalTime().ToShortDateString());
                                        }
                                        else if (values.VaccinedetailList[index].Dosage == 2)
                                        {
                                            if (values.VaccinedetailList[index].VaccineType.Equals(vaccinationType))
                                            {
                                                Console.WriteLine("vaccinated successfully finished.");
                                                
                                            }
                                        }
                                        break;
                                    case 2:
                                        Console.WriteLine("--------------------------------------------");
                                        Console.WriteLine("VACCINATION HISTORY");
                                        Console.WriteLine("--------------------------------------------");
                                        if (values.VaccinedetailList[index].Dosage == 2)
                                        {
                                            Console.WriteLine("Dosage :{0}", values.VaccinedetailList[index].Dosage);
                                            Console.WriteLine("First Dosage :{0}", values.VaccinedetailList[index].Date1.ToUniversalTime().ToShortDateString());
                                            Console.WriteLine("Second Dosage :{0}", values.VaccinedetailList[index].Date2.ToUniversalTime().ToShortDateString());
                                            Console.WriteLine("Vaccination :{0}", values.VaccinedetailList[index].VaccineType);
                                        }
                                        else
                                        {
                                            Console.WriteLine("Dosage :{0}", values.VaccinedetailList[index].Dosage);
                                            Console.WriteLine("Vaccinated sucessfully..");
                                            Console.WriteLine("Dosage :{0}", values.VaccinedetailList[index].VaccineType);
                                        }
                                        break;
                                    case 3:
                                        if (values.VaccinedetailList[index].Dosage < 3)
                                        {
                                            Console.WriteLine("Next Due date for vaccination is :{0}", values.VaccinedetailList[index].Date2.ToUniversalTime().ToShortDateString());

                                        }
                                        else
                                        {
                                            Console.WriteLine("YOU HAVE COMPLETED THE VACCINATION FULLY\nTHANKS FOR THE PARTICIPATION");
                                        }
                                        break;
                                   
                                    default:
                                        break;
                                }
                                count = count + 1;
                            }
                            else
                            {
                                index = index + 1;
                                count = count + 0;
                            }
                        }
                        if (count == 0)
                        {
                            Console.WriteLine("Wrong data input!!!");
                        }
                        goto MainMenu;
                    default:
                        break;
                }
            }

        }
                      

    }
}
    

