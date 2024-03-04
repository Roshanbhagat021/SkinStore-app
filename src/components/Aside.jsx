import { useState } from "react";
import Styles from "./AllProductsPage.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Brand,SkinConcern,SkinTone,SkincareProduct,SkinCareUse,MakeUpColors,MakeUpProducts } from "../data/ChecklistData";

function CheckBox({ name, no }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div id={Styles.Checkbox} className={Styles.flex}>
        {isActive ? (
          <>
            <div
              onClick={() => setIsActive(!isActive)}
              className={`${Styles.Unselected_box} `}
            ></div>
            {name} ({no})
          </>
        ) : (
          <>
            <div
              onClick={() => setIsActive(!isActive)}
              className={`${Styles.selected_box} `}
            ></div>
            {name} ({no})
          </>
        )}
      </div>
    </>
  );
}

function Aside() {
  return (
    <>
      <div id={Styles.aside}>
        <h1 id={Styles.aside_heading}>Refine</h1>
      </div>
      <Accordion
        id={Styles.aside}
        defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7]}
        allowMultiple
      >
        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {Brand.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
                Skin Consern
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {SkinConcern.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
                Skin Tone
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {SkinTone.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
                Skin care Product
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {SkincareProduct.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
              SkinCare Use
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {SkinCareUse.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
              Make-Up Colors
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {MakeUpColors.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
              Make-Up Products
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {MakeUpProducts.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className={Styles.accordion_headers}>
              <Box as="span" flex="1" textAlign="left">
                Skin Consern
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id={Styles.CheckBox_container}>
              {Brand.map((ele, ind) => (
                <CheckBox key={ind} {...ele} />
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Aside;
