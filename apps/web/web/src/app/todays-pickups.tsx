'use client'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  background-color: #F5F5F5;
  padding: 30px;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  width: 1100px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Header = styled.h1`
  font-size: 34px;
`;

const DaySelector = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 6px 15px;
  align-items: center;
  width: 519px;
  background-color: #FFFFFF;
  font-size: 18px;
`;

const ScrollableDiv = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 20px;
  height: 300px;
  overflow-y: auto;
`;

const Record = styled.div`
  font-size: 18px;
  justify-content: space-between;
  gap: 10px;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px
`;


export default function TodaysPickups() {
  return (
    <MainContainer>
      <TopContainer>
        <Header>Today's Pickups</Header>
        <DaySelector>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </DaySelector>
      </TopContainer>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 15px', fontSize: '18px' }}>
        <h3>Pickup ID</h3>
        <h3>Customer</h3>
        <h3>Type</h3>
        <h3>Scheduled</h3>
        <h3>Client Contact</h3>
        <h3>Status</h3>
      </div>

      <ScrollableDiv>
        <Record>
            <div>1203</div>
            <div>Mary Johnson</div>
            <div>Regular</div>
            <div>Monday</div>
            <div>123-456-7890</div>
            <div>Status</div>
        </Record>
        <Record>
            <div>1204</div>
            <div>Mary Johnson</div>
            <div>On call</div>
            <div>Monday</div>
            <div>123-456-7890</div>
            <div>Status</div>
        </Record>
        <Record>
            <div>1205</div>
            <div>Mary Johnson</div>
            <div>Regular</div>
            <div>Monday</div>
            <div>123-456-7890</div>
            <div>Status</div>
        </Record>
        <Record>
            <div>1206</div>
            <div>Mary Johnson</div>
            <div>Regular</div>
            <div>Monday</div>
            <div>123-456-7890</div>
            <div>Status</div>
        </Record>
        <Record>
            <div>1207</div>
            <div>Mary Johnson</div>
            <div>Regular</div>
            <div>Monday</div>
            <div>123-456-7890</div>
            <div>Status</div>
        </Record>

      </ScrollableDiv>
    </MainContainer>
  );
}
