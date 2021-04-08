var images = [
              "DSC04881.JPG",
              "dadu.jpg", 
              "thammu.jpg", 
              "jethu.jpg",
              "DSC04870.JPG",
              "20210221_160510.jpg",
              "20210116_122053.jpg",
              "dada.jpg",
              "DSC00429.JPG"];

            var names = ["Family Book",
                         "Giridhari lal de",
                          "Krishna De", 
                          "Amit De", 
                          "Madhumita De", 
                          "Anjan De", 
                          "Anasua De", 
                          "Anshu De", 
                          "Aniruddha De"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 8
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
