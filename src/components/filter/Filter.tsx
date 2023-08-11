"use client"
import "./filter.css"
import Image from "next/image";
import iconFilter from "../../assets/iconFilter.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { cars } from "../../mockup/index";
import { useContext } from 'react';
import { AppContext } from '../../components/providers/contextProvider';


export default function Filter() {
  const { setFilterString, setFilterYear, setFilterModel } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const arrayNoRepeats = cars.filter(
    (obj, index, self) =>
      index ===
      self.findIndex(
        item => item.brand === obj.brand
      )
  );

  const handleFilterString = (e: any, onClose: any) => {
    setFilterString(e.target.innerHTML);
    setFilterModel("");
    setFilterYear(0);
    onClose();
  }

  const handleFilterDate = (e: any, onClose: any) => {
    setFilterYear(Number(e.target.innerHTML));
    setFilterString("");
    setFilterModel("");
    onClose();
  }

  const handleFilterModel = (e: any, onClose: any) => {
    setFilterYear(0);
    setFilterString("");
    setFilterModel(e.target.innerHTML);
    onClose();
  }

  const handleCleanFilter = (onClose: any) => {
    setFilterYear(0);
    setFilterString("");
    setFilterModel("");
    onClose();
  }

  return (
    <div className="container-filter">
      <>
        <Button onClick={onOpen} position="absolute" zIndex={1} id="btn-filter">
          {`Filtro: `}
          <Image src={iconFilter} alt="imagem de carro" width={40} height={20} />
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Filtro</ModalHeader>
            <ModalCloseButton />
            <div className="filter-body">
              <h2>Marcas</h2>
              {arrayNoRepeats.map((item) => (
                <p key={item.id} onClick={(e) => handleFilterString(e, onClose)}>{item.brand}</p>
              ))}
              <h2>Modelo</h2>
              {cars.map((item) => (
                <p key={item.id} onClick={(e) => handleFilterModel(e, onClose)}>{item.model}</p>
              ))}
              <h2>Ano</h2>
              <p onClick={(e) => handleFilterDate(e, onClose)}>2021</p>
              <p onClick={(e) => handleFilterDate(e, onClose)}>2019</p>
              <p onClick={(e) => handleFilterDate(e, onClose)}>2016</p>
              <p onClick={(e) => handleFilterDate(e, onClose)}>2014</p>
              <p onClick={(e) => handleFilterDate(e, onClose)}>2013</p>
            </div>
            <ModalFooter>
              <Button colorScheme='green' mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button colorScheme="red" onClick={() => handleCleanFilter(onClose)}>Limpar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  )
}