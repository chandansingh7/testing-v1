import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import {ShadowDomEncapsulationComponent} from "./pages/landing/shadow-dom-encapsulation.component";
import {NoEncapsulationComponent} from "./pages/landing/no-encapsulation.component";
import {EmulatedEncapsulationComponent} from "./pages/landing/emulated-encapsulation.component";
import { ComponentIneractionComponent } from './examples/component-ineraction/component-ineraction.component';
import {HeroChildComponent} from "./examples/component-ineraction/heros/hero-child.components";
import {HeroParentComponent} from "./examples/component-ineraction/heros/hero-parent.component";
import {NameChildComponent} from "./examples/component-ineraction/heros/name-child.component";
import {NameParentComponent} from "./examples/component-ineraction/heros/name-parent.component";
import {VersionChildComponent} from "./examples/component-ineraction/heros/version-child.component";
import {VersionParentComponent} from "./examples/component-ineraction/heros/version-parent.component";
import {VoterComponent} from "./examples/component-ineraction/parent-to-child/voter.component";
import {VoteTakerComponent} from "./examples/component-ineraction/parent-to-child/votetaker.component";
import {
  CountdownTimerComponent
} from "./examples/component-ineraction/parent-to-child-local-varialbe/countdown-timer.component";
import {
  CountdownLocalVarParentComponent
} from "./examples/component-ineraction/parent-to-child-local-varialbe/countdown-parent.component";
import {
  CountdownViewChildParentComponent
} from "./examples/component-ineraction/parent-calls-via-viewchild/countdown-parent.component";
import {
  MissionControlComponent
} from "./examples/component-ineraction/parent-to-child-via-service/missioncontrol.component";
import {AstronautComponent} from "./examples/component-ineraction/parent-to-child-via-service/astronaut.component";
import {ColoredBoxComponent} from "./examples/component-styles/my-colored-box-inline.component";
import {ColoredBoxRecComponent} from "./examples/component-styles/my-colored-box-in-recomeded/colored-boxrec.component";
import {ParentComponent} from "./examples/component-styles/my-colored-box-in-recomeded/parent.component";
import {
  HostSelectorExampleComponent
} from "./examples/component-styles/special-selector/host-selector-example.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ComponentIneractionComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent,
    ColoredBoxComponent,
    ColoredBoxRecComponent,
    ParentComponent,
    HostSelectorExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
