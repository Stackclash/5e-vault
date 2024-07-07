"""Weather Roller v3 - Python Edition"""

import numpy as np
import matplotlib.pyplot as plt

def WeatherRoller(x0=14.1, xp=14, tend=360, CS=1/2, DS=4, step=4):
    t0 = 0
    tend = tend - 1/step
    correction_strength = CS
    disturbance_strength = DS

    rands = np.random.rand(4)
    def f(t):
        return (2 * rands[0]) * np.sin(2 * np.pi * (t + (50 * rands[2] + 50)) / (250 * rands[1] + 50)) + (3 * rands[3] + 5)
    
    t = np.arange(0, tend+1)
    x = np.zeros(int(tend*step+2))
    x = [x0]
    s = f(0)
    
    for t in np.arange(t0, tend+1/step, 1/step):
        disturbance_x = 4*disturbance_strength/step * (np.random.rand() - 0.5)
        disturbance_s = 2 * (np.random.rand() - 0.5)
        s = disturbance_s / 2 + f(t)

        err = x[-1] - xp
        correction = -err * 4*correction_strength / (s*step)
        x.append(x[-1] + disturbance_x + correction)
        if x[-1] > 20:
            x[-1] = 20
        elif x[-1] < 0:
            x[-1] = 0    
    return x

# Inputs
n = 365.25*5 # Total number of days to generate data for
steps = 2 # Number of entries per day
AnTempAvg = 30 # Annual average temperature
AnTempDev = 1 # Annual average temperature deviation
AnPressAvg = 1020 # Annual average Pressure (how nice the weather is)
NightInsulation = 1 # temperature diffence between night and day (default (5/9))
lat = -15 # What latitude do you want weather for?
ocean = False # True if on the ocean (this just makes it 50% more windy)
SaveFileName = 'H:\Övrigt\DnD\Weather.xls' # Save path and filename
SaveFigName = 'H:\Övrigt\DnD\Weather.png'

# Inputs orbital parameters
year = 365.25 # A year in days
ecc = 0 # The eccentricy of planet's orbit
At = 23.4305 # The axial tilt of the planet (degrees)
yearNow = 0 # Starting year (mostly fine to leave at 0)

datapoints = int(np.ceil(n*steps))
M = np.zeros([datapoints+1, 9])   # Creates the matrix for all the data
M[:,0] = np.array([[i/steps for i in range(datapoints+1)]])   # Numbers all of the days
Rolls = np.zeros([datapoints+1, 4])
Rolls[:,0] = np.array([[i/steps for i in range(datapoints+1)]])  # Create a numbered array for all the things that will get rolled.

# Create plotarea
fig, ax = plt.subplots(6, 1, figsize=(10*n/year, 20))

# Pressure
k = (AnPressAvg-1013)*20/57+10
Rolls[:,1] = WeatherRoller(k, k, n, 1/4, 6, steps) # This script will create semi-random noise data for pressure which will be used a lot in the rest of the script
M[:,1] = np.round((Rolls[:,1]-10)*3.675+1013.25, 0)

# Plot pressure
ax[0].plot(M[:,0], M[:,1])
ax[0].axis([0, n, 970, 1050])
ax[0].set_title('Pressure')
ax[0].set_ylabel('kPa')

# Cloud Cover
Temporary4Rain = np.where(M[:, 2] < 1030, -1/8*Rolls[:,1] + 15/8, 0)
M[:, 2] = np.round(Temporary4Rain, 1)

# Plot Cloud Cover
ax[1].plot(M[:,0], 100*M[:,2])
ax[1].axis([0, n, 0, 100])
ax[1].set_title('Cloud Cover')
ax[1].set_ylabel('%')

# Wind
Rolls[:,2] = WeatherRoller(0, -3, n, 1.5, 20, steps)
if ocean:
    M[:, 3] = 1.5*np.round(Rolls[:, 2]*(1.67084*np.exp(-0.100414*Rolls[:, 1])-0.011213), 1)
else:
    M[:, 3] = np.round(Rolls[:, 2]*(1.67084*np.exp(-0.100414*Rolls[:, 1])-0.011213), 1)

# Plot Wind
ax[2].plot(M[:, 0], M[:, 3])
ax[2].axis([0, n, 0, 30])
ax[2].set_title('Wind speed')
ax[2].set_ylabel('m/s')

# Is the sun up or not?
At = At*np.pi/180
yearNow = 0
lat = lat*np.pi/180

# Formulas
def f1(t, lat):
    return -abs(np.arcsin(np.sin(-At)*np.cos(2*np.pi*(t+10)/year+2*ecc*np.sin(2*np.pi*(t-2)/year)))-lat)+np.pi/2
def f2(t, lat):
    return (abs(-lat)-np.pi/2)*(np.cos(2*np.pi*(t-5/96))+1)
def f3(t, lat):
    return abs(f1(t,lat)+f2(t,lat)+np.pi/2)-np.pi/2
def f4(t, lat):
    return f3(t, lat)*(np.sign(f3(t, lat))+1)/2
def f5(t):
    return 0.45833*np.cos((t/year+(yearNow-2000.2))*2*np.pi/11)+1366.04167
def f6(t,lat):
    return f5(t)*np.sin(f4(t, lat))

Sun = f6(M[:, 0],lat)
Sun[Sun>0] = 1
M[:, 8] = Sun

import numpy as np

# Temperature
Rolls[:,3] = WeatherRoller(10, 10, n, 1/3, 3, steps)
AvgTemp = np.round(-NightInsulation*np.sin(np.pi/0.5*(M[:,0]+10.5/year))-AnTempDev*np.cos(2*np.pi*(M[:,0]-31)/year)+AnTempAvg, 1)
TempRollInfl = (Rolls[:,3]-10)*18.5/20

PressRollInfl = np.where(Sun == 0, -(Rolls[:,1]-10)*4/20, (Rolls[:,1]-10)*4/20)

M[:,4] = np.round(np.sum([AvgTemp, TempRollInfl, PressRollInfl], axis=0), 0)
TempRange = [np.min(M[:,4]), np.median(M[:,4]), np.max(M[:,4])]

# Plot Temperature
ax[3].plot(M[:,0], M[:,4])
ax[3].axis([0, n, 1.2**-np.sign(TempRange[0])*TempRange[0], 1.2**np.sign(TempRange[2])*TempRange[2]])
ax[3].set_title('Actual Temperature')
ax[3].set_ylabel('C')


# Wind chill
M[:, 5] = np.round(13.2 + 0.6215*M[:, 4] - 11.37*(3.6*M[:, 3]+5)**0.16 + 0.3965*M[:, 4]*(3.6*M[:, 3]+5)**0.16, 0) # NASA's formula for windchill
WCTempRange = [np.min(M[:, 5]), np.median(M[:, 5]), np.max(M[:, 5])]

# Plot Wind Chill
ax[4].plot(M[:, 0], M[:, 5])
ax[4].axis([0, n, 1.2**(-np.sign(WCTempRange[0]))*WCTempRange[0], 1.2**np.sign(WCTempRange[2])*WCTempRange[2]])
ax[4].set_title('Wind Chill')
ax[4].set_ylabel('C')

# Precipitation
PrecFromPress = 0.0808201*2**(Temporary4Rain/0.137774)
PrecFromPress[PrecFromPress < 2] = 0

PrecType = np.zeros((datapoints+1, 1))
PrecDensity = np.zeros((datapoints+1, 1))

PrecType[M[:, 4] < -1] = 0  # If Temp < -1C, then snow
PrecDensity[M[:, 4] < -1] = np.array([13.5542*M[M[:, 4] < -1, 3] + 50]).transpose()

PrecType[np.logical_and(M[:, 4] >= -1, M[:, 4] < 1)] = 1  # If Tempc < 1C, then slush
PrecDensity[np.logical_and(M[:, 4] >= -1, M[:, 4] < 1)] = 750

PrecType[M[:, 4] >= 1] = 2  # If Temp >= 1C, then rain
PrecDensity[M[:, 4] >= 1] = 1000

M[:,6] = PrecType[:,0]
M[:,7] = np.round(PrecFromPress / PrecDensity[:,0], 3)

# Plot Precipitation
ax[5].plot(M[:,0], M[:,7])
ax[5].axis([0, n, 0, 1.5])
ax[5].set_title('Precipitation')
ax[5].set_ylabel('mm/h')
plt.show()

AnPrec = round(np.sum(6*M[:,7]))   # Yearly percipitation (mm)
N = np.zeros_like(M[:,7])
N[M[:,7] > 0] = 1
np.sum(N)/(n*steps)  # What percentage of the year does it rain?

np.savetxt(SaveFileName, M, delimiter='\t', fmt='%.10g')
fig.savefig(SaveFigName)