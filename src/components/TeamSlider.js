import TeamSlider from "./TeamSlider.jsx";

//Center Stage Image Imports
import wajeehCS from "../images/CSTeamMembers/wajeeh.jpg"
import nubaidCS from "../images/CSTeamMembers/nubaid.jpg"
import aleenaCS from "../images/TeamMembers/aleena2.jpg"
import owaisCS from "../images/CSTeamMembers/owais.jpg"
import yusufCS from "../images/CSTeamMembers/yusuf.jpg"
import azizCS from "../images/CSTeamMembers/aziz.jpg"
import abdurrahmanCS from "../images/CSTeamMembers/abdurrahman.jpg"
import zackariaCS from "../images/CSTeamMembers/zackaria.jpg"
import keyaanCS from "../images/CSTeamMembers/keyaan.jpg"
import zaidCS from "../images/CSTeamMembers/zaid.jpg"

//Power Play Image Imports
import harrisPowerPlay from "../images/PPTeamMembers/Harris.JPG"
import adamPowerPlay from "../images/PPTeamMembers/Adam.JPG"
import maheePowerPlay from "../images/PPTeamMembers/Mahee.JPG"
import afzalPowerPlay from "../images/PPTeamMembers/Afzal.JPG"
import nubaidPowerPlay from "../images/PPTeamMembers/Nubaid.JPG"
import wajeehPowerPlay from "../images/PPTeamMembers/Wajeeh.JPG"
import aleenaPowerPlay from "../images/TeamMembers/aleena2.jpg"
import owaisPowerPlay from "../images/PPTeamMembers/Owais.JPG"
import yusufPowerPlay from "../images/PPTeamMembers/Yusuf.JPG"
import abdurrahmanPowerPlay from "../images/PPTeamMembers/Abdurahman.JPG"
import azizPowerPlay from "../images/PPTeamMembers/Aziz.JPG"

//Freight Frenzy Image imports
import harrisFF from "../images/TeamMembers/harris.png"
import adamFF from  "../images/TeamMembers/adam.png"
import maheeFF from "../images/TeamMembers/mahee.png"
import afzalFF from "../images/TeamMembers/afzal.jpg"
import nubaidFF from "../images/TeamMembers/nubaid.png"
import manarFF from "../images/TeamMembers/manar.png"
import wajeehFF from "../images/TeamMembers/wajeeh.png"

//Ultimate Goal Image Imports
import omarUG from "../images/TeamMembers/omar.png"
import ibraheemUG from "../images/TeamMembers/ibraheem.png"
import sanaUG from "../images/TeamMembers/sana.png"
import adelUG from "../images/TeamMembers/adel.png"
import harrisUG from "../images/TeamMembers/harris.png"
import adamUG from "../images/TeamMembers/adam.png"
import maheeUG from "../images/TeamMembers/mahee.png"
import malakUG from "../images/TeamMembers/malak.jpg"
import nadineUG from "../images/TeamMembers/nadine.jpg"

/* Team Member Info:

    {
        name: "",
        image: image,
        description: ""
    },

*/

const centerStageTeam = [
    {
        name: "Wajeeh",
        image: wajeehCS,
        description: "Mechanical/Electrical Lead"
    },

    {
        name: "Nubaid",
        image: nubaidCS,
        description: "Software Lead"
    },

    {
        name: "Aleena",
        image: aleenaCS,
        description: "Media Lead"
    },
    
    {
        name: "Owais",
        image: owaisCS,
        description: "CAD Lead"
    },

    {
        name: "Abdurrahman",
        image: abdurrahmanCS,
        description: "ENB Lead"
    },
    
    {
        name: "Aziz",
        image: azizCS,
        description: "Documentation Lead"
    },
    
    {
        name: "Yusuf",
        image: yusufCS,
        description: "Mechanical Pupil"
    },
    
    {
        name: "Keyaan",
        image: keyaanCS,
        description: "Software Pupil"
    },
    
    {
        name: "Zackaria",
        image: zackariaCS,
        description: "Electrical Pupil"
    },
    
    {
        name: "Zaid",
        image: zaidCS,
        description: "Mechanical Pupil"
    },
];

const powerPlayTeam = [
    {
        name: "Harris",
        image: harrisPowerPlay,
        description: "Software/Control Lead"
    },

    {
        name: "Adam",
        image: adamPowerPlay,
        description: "Electrical Lead/Mechanical Team Member"
    },

    {
        name: "Mahee",
        image: maheePowerPlay,
        description: "Mechanical Lead"
    },

    {
        name: "Afzal",
        image: afzalPowerPlay,
        description: "CAD Lead/Mechanical Team Member"
    },
    
    {
        name: "Nubaid",
        image: nubaidPowerPlay,
        description: "Software Team Member/Electrical Parts Owner/ENB Lead"
    },
    
    {
        name: "Wajeeh",
        image: wajeehPowerPlay,
        description: "Software Team Member/Mechanical Parts Owner"
    },
    
    {
        name: "Aleena",
        image: aleenaPowerPlay,
        description: "Media Lead"
    },
    
    {
        name: "Owais",
        image: owaisPowerPlay,
        description: "Junior Mechanical Team"
    },
    
    {
        name: "Yusuf",
        image: yusufPowerPlay,
        description: "Junior Mechanical Team"
    },
    
    {
        name: "Abdurrahman",
        image: abdurrahmanPowerPlay,
        description: "Junior Electrical Team"
    },
    
    {
        name: "Aziz",
        image: azizPowerPlay,
        description: "Junior Software Team"
    },
];

const freightFrenzyTeam = [
    {
        name: "Harris",
        image: harrisFF,
        description: "Software/Control Lead"
    },

    {
        name: "Adam",
        image: adamFF,
        description: "Electrical Lead"
    },

    {
        name: "Mahee",
        image: maheeFF,
        description: "Mechanical Lead"
    },
    
    {
        name: "Afzal",
        image: afzalFF,
        description: "CAD Designer/Mechanical Team Member"
    },
    
    {
        name: "Nubaid",
        image: nubaidFF,
        description: "Software Team Member/Electrical Parts Owner"
    },
    
    {
        name: "Manar",
        image: manarFF,
        description: "Media + Outreach Lead/Mechanical Team Member"
    },
    
    {
        name: "Wajeeh",
        image: wajeehFF,
        description: "Software Team Member/Mechanical Parts Owner"
    }
];

const ultimateGoalTeam = [
    {
        name: "Omar",
        image: omarUG,
        description: "Mechanical Lead"
    },

    {
        name: "Ibraheem",
        image: ibraheemUG,
        description: "Software + Control Lead/Electrical Lead"
    },

    {
        name: "Sana",
        image: sanaUG,
        description: "Media/Outreach Lead"
    },

    {
        name: "Adel",
        image: adelUG,
        description: "ENB Lead/Mechanical Team Member"
    },

    {
        name: "Harris",
        image: harrisUG,
        description: "Software Team Member"
    },
    
    {
        name: "Adam",
        image: adamUG,
        description: "Software Team Member/Electrical Team Member"
    },
        
    {
        name: "Mahee",
        image: maheeUG,
        description: "Mechanical Team Lead/Mechanical Parts Owner"
    },
            
    {
        name: "Malak",
        image: malakUG,
        description: "Mechanical Team Member/Media Team Member"
    },

    {
        name: "Nadine",
        image: nadineUG,
        description: "Mechanical Team Member/Outreach Team Member"
    }
];

export default function Teams() {
    return (
        <div className="carousel">
            <div>
                <h1 className="teammembers">TEAM MEMBERS</h1>
            </div>

            <TeamSlider
            title="Center Stage Team Members"
            members={centerStageTeam}
            />

            <hr/>

            <TeamSlider
            title="Power Play Team Members"
            members={powerPlayTeam}
            />

            <hr/>

            <TeamSlider 
            title="Freight Frenzy Team Members"
            members={freightFrenzyTeam}
            />

            <hr/>

            <TeamSlider
            title="Ultimage Goal Team Members"
            members={ultimateGoalTeam}
            />


        </div>
    )
}